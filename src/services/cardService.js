'use strict'
const Card = require('../models/card')

class CardService{

    createCard(fields){
        let card = new Card(fields)
        return card.save()
    }

    findByName(name){
        return Card.findOne({name: name})
    }

    findById(id){
        return Card.findOne({id: id})
    }
}

module.exports = new CardService