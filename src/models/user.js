'use strict'

const mongoose = require('mongoose'),
	  db       = require('./db');

const UserSchema = mongoose.Schema({
	username: {type: String, unique: true, dropDups: true, required: true},
	deckList: [{name: {type: String}, cards: [ {quantity: Number, id: String} ] }],
	lastLogin: {type: Date, default: Date.now} ,
    type: {type: String, required: true, default: 'USER'},
    entryDate: Date,
    email: {type: String, unique: true, dropDups: true, required: true},
    hash:String,
})

const User = mongoose.model('user', UserSchema)

module.exports = User 


