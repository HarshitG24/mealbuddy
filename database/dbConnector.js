import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL;
const client = new MongoClient(url, {});
const db = client.db("MealBuddy");
const users = db.collection("users");
const whishlist_data = db.collection("whishlist");
const checkoutOrders = db.collection("allOrders");

function dbConnector() {
  let dbObj = {};

  dbObj.addUser = async (data) => {
    await client.connect();

    try {
      await users.insertOne(data);
      return 200;
    } catch (error) {
      console.log("error", error);
      return 400;
    } finally {
      client.close();
    }
  };

  //AUTHOR: MIHIR MESIA
  dbObj.createUser = async (userData) => {
    await client.connect();
    try {
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
          password: userData.password,
        })
        .toArray();
      return {
        data: user.length ? user : [],
        code: user.length > 0 ? 200 : 500,
      };
    } catch (error) {
      console.log(error);
      return 400;
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
        for (let i = 0; i < whishlist[0].data.length; i++) {
          if (
            whishlist[0].data[i].name === data.data.name &&
            whishlist[0].data[i].img === data.data.img &&
            whishlist[0].data[i].calories === data.data.calories &&
            whishlist[0].data[i].price === data.data.price
          ) {
            console.log("True");
            return 200;
          }
        }

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
      client.close();
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
      client.close();
    }
  };

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
      } else {
        return 400;
      }
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
    }
  };
  return dbObj;
}

export default dbConnector();
