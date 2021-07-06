const mongoCon = require('../mongo_con');

async function Find() {
  const client = await mongoCon.connect();
  const db = client.db(process.env.DBNAME);
  const result = await db
    .collection(process.env.collectionName)
    .find({})
    .toArray();
  return result;
}

async function FindName(names) {
  const client = await mongoCon.connect();
  const db = client.db(process.env.DBNAME);
  const result = await db
    .collection(process.env.collectionName)
    .findOne({ name: names });
  return result;
}

async function Post(info){
  const client = await mongoCon.connect();
  const db = client.db(process.env.DBNAME);
  const result = await db
  .collection(process.env.collectionName).
  insertOne(info);
  return result;
}

async function Put(id,info){
  const client = await mongoCon.connect();
  const db = client.db(procees.env.DBNAME);
  const result = await db
  .collection(process.env.collectionName)
  .updateOne(
    { _id: parseInt(id) },
    { $set: info });
  return result;
}

async function Delete(id){
  const client = await mongoCon.connect();
  const db = client.db(process.env.DBNAME);
  const result = await db
  .collection(process.env.collectionName)
  .deleteOne(
    { _id: parseInt(id) });
  return result;
}

async function Validate(username,password){
  const client = await mongoCon.connect();
  const db = client.db(process.env.DBNAME);
  const result = await db
  .collection(process.env.collectionName)
  .findOne(
    { username: username, password: password });
  return result;
}

module.exports = { Find, FindName , Post, Put , Delete , Validate};