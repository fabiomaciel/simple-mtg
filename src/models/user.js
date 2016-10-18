'use strict'

const mongoose = require('mongoose'),
			db = require('./db')


const UserSchema = mongoose.Schema({
	username: {type: String, unique: true, dropDups: true, required: true},
	password: {type: String, unique: true, dropDups: true, required: true},
	deckList: {type: Array, required: false},
	lastLogin: {type: Date, default: Date.now} ,
    entryDate: Date,
    email: String
})


const User = mongoose.model('user', UserSchema)

module.exports = User 


