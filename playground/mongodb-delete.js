// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    console.log('unable to connect to MongoDb server.');
  }
  console.log('connected to MongoDb server.');
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result=>{
  //   console.log(result);
  // }));
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result=>{
  //   console.log(result);
  // }));
  db.collection('Todos').findOneAndDelete({completed:false}).then((result=>{
    console.log(result);
  }));
  // db.close();
});
