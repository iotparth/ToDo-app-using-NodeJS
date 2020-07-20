// to acces from db ;
const Description = require('../models/descriptions');

// functions to be performed
module.exports.home=function(req,res){
    // getting data from the databse
    Description.find({},function(err,task){    //find is also the inbuilt function to find and perform
        if(err){
            console.log('Ohhhhhhhh! That is the only thing this app can say as there is an error in fetching the contacts from db')
            return ;
        }
        return  res.render('home',{
            title:"To Do App",
            task_list:task
        });

    });
  
};

module.exports.Create=function(req,res){
    Description.create({                  //this is to check in the collection contact in DB
        name:req.body.name,
        category:req.body.category,
        date:req.body.date
    },function(err,newtask){
        if(err){
            console.log('Hey you their was an error in creating a contact!');
            return;
        }
        return res.redirect('back');
    });
};

module.exports.delete=function(req,res){
    let id=req.query.id;
    Description.findByIdAndDelete(id,function(err){
        if(err){
            console.log('I cannot delete the contact as their was an error in deleting object from DB, what are you doing man!?')
            return;
        }
        return res.redirect('back') //open the server
    });

    }
