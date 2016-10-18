'use strict'

const mongoose = require('mongoose'),
			db = require('./db')


const CardSchema = mongoose.Schema({
  id: String,
	name: {type: String, unique: true, dropDups: true, required: true},
	names: {type: Array, required: false},
	collectionCode: [String],
    rarity: String,
	number: {type: Number, require: false},
	mciNumber: Number,
	power: {type: String, required: false},
	toughness: {type: String, require: false},
	cmc: Number,
	manaCost: String,
	colorIdentity: Array,
	colors: Array,
	flavor: String,
	imageName: String,
	layout: String,
	multiverseid: Number,
	type: String,
	types: Array,
	subtypes: Array,
	supertypes: Array,
	text: String,
	artist: String,
})

CardSchema.methods.imageUrl = function(lang) {
	return `http://magiccards.info/scans/${lang || 'en'}/${this.collectionCode}/${this.number}.jpg`
}

const Card = mongoose.model('card', CardSchema)

module.exports = Card


