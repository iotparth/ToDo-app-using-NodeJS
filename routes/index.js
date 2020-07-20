//to acess exress library
const express=require('express');
// to use express router 
const route=express.Router();
//to access controllers

const todoController=require('../controllers/todo_home');

//rendering homefile
route.get('/',todoController.home);
//this is to render to the controller create func
route.post('/create-task',todoController.Create);
// this is to render to delete function
route.get('/delete-task/',todoController.delete);







// to export routes
module.exports=route;