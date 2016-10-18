'use strict'
const Card = require('../models/card')

class CardService{

    createCard(fields){
        let card = new Card(fields)
        return card.save()
    }

    findByName(name){
        return Card.find({name: name})
    }

}

module.exports = new CardService