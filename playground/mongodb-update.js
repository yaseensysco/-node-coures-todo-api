// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    console.log('unable to connect to MongoDb server.');
  }
  console.log('connected to MongoDb server.');
  db.collection('Todos').findOneAndUpdate({_id : new ObjectID('599d2418b6178ffb338f2ca9')},{$set:{completed:true}},{retrnOriginal:false}).then((result=>{
    console.log(result);
  }));
  // db.close();
});
