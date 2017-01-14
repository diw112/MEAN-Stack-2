const mongoose = require('mongoose');

const User = require('../models/user.model');

/// get user All
exports.list = function (req, res) {
   User.find({},{password: false }, function(err, users){
         if(err){
            return next(err);
        }else{
            res.json(users);
        }
    });   
};

// Post User 
exports.create = function(req, res, next) {
    const user = new User(req.body);

    user.save(function(){
        if(err){
            return next(err);
        }else{
            res.json(user);
        }
    });
};