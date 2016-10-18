'use strict'

const mongoose = require('mongoose'),
			db = require('./db')


const CardSchema = mongoose.Schema({
  id: String,
	name: String,
	collectionCode: String,
  rarity: String,
	number: Number,
	mciNumber: Number,
	power: String,
	toughness: String,
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


