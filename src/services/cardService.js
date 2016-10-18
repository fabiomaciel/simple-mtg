'use strict'
const Card = require('../models/card')

class CardService{

    createCard(fields){
        let card = new Card(fields)
        return card.save()
    }


}

module.exports = new CardService