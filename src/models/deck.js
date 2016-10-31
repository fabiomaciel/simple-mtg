'use strict'

const mongoose = require('mongoose'),
	  db       = require('./db');

const DeckSchema = mongoose.Schema({
    id: String,
	name: {type: String, required: true},
	tags: {type: Array, required: false},
	cards: [{quantity: Number, id: String}],
	userId: String,
})

const Deck = mongoose.model('deck', DeckSchema)

module.exports = Deck


