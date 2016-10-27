'use strict'
const User = require('../models/user')
const bcrypt = require('bcrypt')

class UserService{

     createUser(fields,res,req,error_str){
        let user = new User(fields)
        user.hash = bcrypt.hashSync(fields.password, 10);
        return user.save(function(err){
        if ( err && err.code === 11000 ) { 
            error_str.push('User with username/email already Exists');
            res.render('pages/signup',{error:error_str});
            return;
        }
        else{
            res.locals  = {};
            res.locals["success"]='Registration Success';
            res.redirect('/');
        }
        });
    }

    findAllUsers(){
        return User.find()
    }

    findOneUserByName(name){
        return User.findOne({username: name})
    }

    findManyUserByName(name){
        return User.find({username: name})
    }

    findById(id){
        return User.findOne({_id: id})
    }

    updateUser(id,userData){
        return User.findByIdAndUpdate(id, userData, {new: true})
    }

}

module.exports = new UserService
