const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function createDatabase() {
    try {
     await client.connect();
     console.log("Connected succesfully to the server...");
     
     //creating db
     const db = client.db("testDB");
     console.log("DB created succesfully...");

     //creating collections
     const collection = db.collection("users");
     const response = await collection.insertOne({"email":"kvvssgowtham@gmail.com","password":"Gowtham@7"});
     console.log("User Inserted Succesfully...")
     console.log(response);

     //Reading data
     const data = await collection.findOne({"email":"kvvssgowtham@gmail.com"});
     console.log(data);

     //updating
     const filter = {"email":"kvvssgowtham@gmail.com"};
     //// this option instructs the method to create a document if no documents match the filter
     const options = {upsert:true};
     const updateDoc = {
          $set : {
               "email" : "gowthamvvss@gmail.com"
          }
     }
     const result = await collection.updateOne(filter,updateDoc,options);
     console.log(result);

     const deleteOne = await collection.deleteOne({"email":"gowthamvvss@gmail.com"});
     console.log(deleteOne);
    } catch (error) {
     console.log(error);
    }
}

createDatabase();
