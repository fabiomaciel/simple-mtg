'use strict'

const mongoose = require('mongoose'),
			db = require('./db')


const UserSchema = mongoose.Schema({
	username: {type: String, unique: true, dropDups: true, required: true},
	hash:String,
	deckList: {type: Array, required: false},
	lastLogin: {type: Date, default: Date.now} ,
    entryDate: Date,
    email: {type: String, unique: true, dropDups: true, required: true}
})


const User = mongoose.model('user', UserSchema)

module.exports = User