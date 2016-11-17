'use strict'

const mongoose = require('mongoose'),
	  db       = require('./db'),
      passportLocalMongoose = require('passport-local-mongoose'),
      uniqueValidator = require('mongoose-unique-validator'),
      gravatar = require('gravatar');

const UserSchema = mongoose.Schema({
	username: {type: String, unique: true, dropDups: true, required: true},
	friendList: [String],
	lastLogin: {type: Date, default: Date.now} ,
    type: {type: String, required: true, default: 'USER'},
    entryDate: Date,
    email: {type: String, unique: true, dropDups: true, required: true},
    hash:String,
})

UserSchema.methods.imageUrl = function(){
    return gravatar.url(this.email, { s: '80', d: '/images/icons/userDefault.png'}, false);
}

UserSchema.plugin(uniqueValidator);
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('user', UserSchema)

module.exports = User 


