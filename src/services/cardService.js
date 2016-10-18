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

    findByCollection(code){
        return Card.find({collectionCode: code})
    }

    loadCollection(collection){
        return collection.cards.map( card =>{
            card.number = card.number || card.mciNumber
            card.collectionCode = [collection.code] 
            return card
        })
    }

    importCards(cards){
        cards.forEach(card => this.createCard(card))
    }

    importCollectionList(collectionList){
        return collectionList.forEach(collection => {
            this.importCollection(collection)
        })
    }

    importCollection(collection){
        let cards = this.loadCollection(collection)
        this.importCards(cards)
    }

}

module.exports = new CardService