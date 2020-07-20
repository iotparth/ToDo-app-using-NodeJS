// to access express library
const express=require('express');
// to acess path
const path= require('path');
//to set the port 
const port =8000;

// to use mongoose database
const db= require('./config/mongoose')
//to access models or schema
const Description=require('./models/descriptions');

//to use express
const app=express();
// to set the view engine
app.set('view engine','ejs');
app.set('views','./views');

// this is to use the middlewares
app.use(express.urlencoded());

// to use the layouts
const expressLayout=require('express-ejs-layouts');
app.use(expressLayout);

//to extract style files for other pages
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//to use static file
app.use(express.static('./assets'));


// to use routes
app.use('/',require('./routes'));




//to check the status of server or telling express what to after setting server
app.listen(port,function(err){
    if(err){
        console.log(`error in setting up the server:${err}`); //interpolation used
    };
    console.log(`server is running up on port:${port}`); // interpolation used
});
