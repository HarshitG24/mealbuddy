import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";
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

  return dbObj;
}

export default dbConnector();
