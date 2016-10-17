'use strict'

const mongoose = require('mongoose'),
			db = require('./db')


const CardSchema = mongoose.Schema({
  id: String,
	name: String,
	colection: String,
	number: Number,
  rarity: String,
	image: String
})



const Card = mongoose.model('card', CardSchema)

module.exports = Card


