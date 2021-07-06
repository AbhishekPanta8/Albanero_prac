// const MongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const uri = `mongodb://${process.env.HOST}:${process.env.MONGOPORT}`;


connect();
async function connect() {
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    return client;
  } catch (exp) {
    console.log(`Exception occured: ${exp}`);
  }
}

module.exports = {connect};
