// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    console.log('unable to connect to MongoDb server.');
  }
  console.log('connected to MongoDb server.');
  // db.collection('Todos').find({_id:new ObjectID('599c00e11ac5c0bbc0d5feaf')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(error)=>{
  //   console.log('Unbale to fetch the Todos',error);
  // });
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count is ${count}`);
  // },(error)=>{
  //   console.log('Unbale to fetch the Todos',error);
  // });
  db.collection('Users').find({name:'Yaseen'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  },(error)=>{
    console.log('Unbale to fetch the Todos',error);
  });
  // db.close();
});
