const mongoose=require('mongoose'); // accessing the mongoose library
mongoose.connect('mongodb://localhost/todo_development');// setting up the connection
const db = mongoose.connection;

db.on('error',console.error.bind(console,"error in setting databse"));

db.once('open',function(){
    console.log("mongodb is setup succesfuly");//if setup is succesfully connected
});



module.exports= db;// exporting file 

