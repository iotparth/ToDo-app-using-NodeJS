const mongoose= require('mongoose');//accessing the mongoose library
const descripSchema = new mongoose.Schema({   //setting up the schema for db
    name:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
});

const Description=mongoose.model('Description',descripSchema);//this is to create the collections we want to store in DB

module.exports = Description;