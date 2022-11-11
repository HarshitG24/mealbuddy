import dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL;
const client = new MongoClient(url, {});
const db = client.db("MealBuddy");
const users = db.collection("users");

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

  return dbObj;
}

export default dbConnector();
