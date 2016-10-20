'use strict'
const User = require('../models/user')

class UserService{

    createUser(fields){
        let user = new User(fields)
        return user.save().then(()=>{}, ()=>{})
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
