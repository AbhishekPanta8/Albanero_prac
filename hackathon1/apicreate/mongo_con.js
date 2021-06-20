// const MongoClient = require("mongodb").MongoClient;
const {MongoClient} = require("mongodb");

const uri = "mongodb://localhost:27017";
connect();
async function connect(){
  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
  });
  try{
    await client.connect();
    return client;
  }
  catch(exp){
    console.log(`Exception occured: ${exp}`); 
  }
}
async function Find() {
  client = await connect();
  
   //get the database using db method
   const db = client.db("EmployeeDetails");

   console.log(`connected to database ${db.databaseName}`);

   const employee = db.collection("comments");
   
   //employee.find() returns a cursor.(promise)
   // const searchCursor = await employee.find({"lag":"js"});
   const searchCursor = await employee.find();
   const result = await searchCursor.toArray();
   console.table(result);
   // result .forEach(r=> console.log(r));
   return db;
}
Find();
module.exports = {Find};
