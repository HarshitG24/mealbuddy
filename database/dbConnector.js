import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
const url = process.env.MONGO_URL;
const client = new MongoClient(url, {});
const db = client.db("MealBuddy");
const users = db.collection("users");
const whishlist_data = db.collection("whishlist");
const checkoutOrders = db.collection("allOrders");
const allData = db.collection("allData");
const BurgerData = db.collection("BuildBurger");

async function hashPassword(plaintextPassword) {
  const hash = await bcrypt.hash(plaintextPassword, 10);
  return hash;
}

// compare password
async function comparePassword(plaintextPassword, hash) {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
}
const categories = db.collection("categories");
const pizzaData = db.collection("BuildPizza");

function dbConnector() {
  let dbObj = {};

  //AUTHOR: MIHIR MESIA
  dbObj.createUser = async (userData) => {
    await client.connect();
    try {
      const pass = await hashPassword(userData.password);
      userData.password = pass.toString();
      await users.insertOne(userData);
      return 200;
    } catch (error) {
      console.log(error);
      return 400;
    } finally {
      // client.close();
    }
  };

  //AUTHOR: MIHIR MESIA
  dbObj.login = async (userData) => {
    await client.connect();
    try {
      const user = await users
        .find({
          email: userData.email,
        })
        .toArray();
      if (user.length > 0) {
        const result = await comparePassword(
          userData.password,
          user[0].password
        );
        console.log(result);
        if (result === true) {
          return {
            data: user,
            code: 200,
          };
        } else {
          console.log("wrong credentials");
          return { code: 400 };
        }
      } else {
        return { code: 400 };
      }
    } catch (error) {
      console.log(error);
      return { code: 400 };
    } finally {
      // client.close();
    }
  };

  //AUTHOR: MIHIR MESIA

  dbObj.send_wishlist = async (data) => {
    await client.connect();

    try {
      const whishlist = await whishlist_data
        .find({ user: data.user })
        .toArray();

      if (whishlist.length > 0) {
        const isFound = whishlist[0].data.some((element) => {
          if (element.pid == data.data[0].pid) {
            return true;
          }

          return false;
        });
        if (isFound) {
          return 200;
        }

        // const isFound = whishlist[0].data.find((element) => {
        //   element.pid === data.data[0].pid;
        // });

        // console.log("isfound", isFound);

        whishlist[0].data = [...whishlist[0].data, ...data.data];

        await whishlist_data.findOneAndUpdate(
          { user: data.user },
          {
            $set: {
              data: whishlist[0].data,
            },
          }
        );
      } else {
        await whishlist_data.insertOne({
          user: data.user,
          data: data.data,
        });
      }
      return 200;
    } catch (error) {
      console.log(error);
      return 400;
    } finally {
      //
    }
  };

  //AUTHOR: MIHIR MESIA
  dbObj.fetch_wishlist = async (user) => {
    console.log(user);
    await client.connect();
    try {
      const wishlist = await whishlist_data.find({ user: user }).toArray();
      if (wishlist.length > 0) {
        const data = wishlist[0].data;
        return data;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
      return 400;
    } finally {
      // client.close();
    }
  };

  // AUTHOR: HARSHIT GAJJAR

  dbObj.checkoutItems = async (data) => {
    await client.connect();

    try {
      const user = await checkoutOrders.find({ user: data.user }).toArray();
      console.log("user is", user);

      if (user.length > 0) {
        user[0].orders = [...user[0].orders, ...data.orders];

        await checkoutOrders.findOneAndUpdate(
          { user: data.user },
          {
            $set: {
              orders: user[0].orders,
            },
          }
        );
      } else {
        await checkoutOrders.insertOne(data);
      }

      return 200;
    } catch (error) {
      console.log(error);
      return 400;
    } finally {
      // client.close();
    }
  };

  // AUTHOR: HARSHIT GAJJAR
  dbObj.getUser = async (data) => {
    await client.connect();

    try {
      const user = await users.find({ email: data }).toArray();

      return {
        data: user.length > 0 ? user[0] : [],
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return 400;
    } finally {
      // client.close();
    }
  };

  // AUTHOR: HARSHIT GAJJAR
  dbObj.updateUser = async (data) => {
    await client.connect();

    try {
      const user = await users.find({ email: data.email }).toArray();

      if (user.length > 0) {
        user[0].name = data.name;
        user[0].password = data.password;

        await users.findOneAndUpdate(
          { email: data.email },
          {
            $set: {
              name: user[0].name,
              password: user[0].password,
            },
          }
        );

        return 200;
      } else {
        return 400;
      }
    } catch (error) {
      console.log(error);
    } finally {
      // client.close();
    }
  };

  // AUTHOR: HARSHIT GAJJAR
  dbObj.deleteUser = async (data) => {
    await client.connect();

    try {
      await users.deleteMany({ email: data });
      await checkoutOrders.deleteMany({ user: data });
      return 200;
    } catch (error) {
      console.log(error);
      return 400;
    } finally {
      // client.close();
    }
  };
  // AUTHOR: MIHIR MESIA

  dbObj.deleteWishlist = async (del_data) => {
    await client.connect();
    try {
      const data = await whishlist_data.find({ user: del_data.user }).toArray();
      const del_index = data[0].data.findIndex(
        (obj) => obj.pid === del_data.pid
      );
      data[0].data.splice(del_index, 1);

      await whishlist_data.findOneAndUpdate(
        { user: del_data.user },
        {
          $set: {
            data: data[0].data,
          },
        }
      );
      return 200;
    } catch (error) {
      console.log(error);
      return 400;
    } finally {
      // client.close();
    }
  };

  // AUTHOR: HARSHIT GAJJAR
  dbObj.fetchAllOrders = async (email) => {
    await client.connect();

    try {
      const orderData = await checkoutOrders.find({ user: email }).toArray();
      return {
        data: orderData,
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        status: 400,
        data: [],
      };
    } finally {
      client.close();
    }
  };

  // AUTHOR: HARSHIT GAJJAR
  dbObj.getData = async () => {
    await client.connect();
    try {
      const arr = await allData.find().toArray();
      return {
        data: arr,
        status: 200,
      };
    } catch (error) {
      console.log("error is", error);
      return {
        data: [],
        status: 400,
      };
    } finally {
      // client.close();
    }
  };

  // AUTHOR: HARSHIT GAJJAR
  dbObj.getCategories = async () => {
    await client.connect();
    try {
      const arr = await categories.find().toArray();
      return {
        data: arr,
        status: 200,
      };
    } catch (error) {
      console.log("error is", error);
      return {
        data: [],
        status: 400,
      };
    } finally {
      // client.close();
    }
  };

  // AUTHOR: HARSHIT GAJJAR
  dbObj.getPizzaData = async () => {
    await client.connect();

    try {
      const arr = await pizzaData.find().toArray();
      return {
        data: arr,
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        data: [],
        status: 400,
      };
    } finally {
      // client.close();
    }
  };

  //AUTHOR: MIHIR MESIA

  dbObj.getBurgerData = async () => {
    await client.connect();

    try {
      const arr = await BurgerData.find().toArray();
      return {
        data: arr,
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        data: [],
        status: 400,
      };
    } finally {
      // client.close();
    }
  };

  return dbObj;
}

export default dbConnector();
