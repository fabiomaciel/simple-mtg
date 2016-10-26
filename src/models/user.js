'use strict'

const mongoose = require('mongoose'),
	  db       = require('./db');

const UserSchema = mongoose.Schema({
	username: {type: String, unique: true, dropDups: true, required: true},
	password: {type: String, dropDups: true, required: true},
	deckList: [{name: {type: String}, cards: {type: Array} }],
	lastLogin: {type: Date, default: Date.now} ,
    type: {type: String, required: true, default: 'USER'},
    entryDate: Date,
    email: String
})

const User = mongoose.model('user', UserSchema)

module.exports = User 


