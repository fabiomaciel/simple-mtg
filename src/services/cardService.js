'use strict'
const Card = require('../models/card')

class CardService{

    createCard(fields){
        let card = new Card(fields)
        return card.save()
    }

    addCollection(name, collectionCode){
        return this.findByName(name).then(card => {
            if(!card) return false
            if(card.collectionCode.indexOf(collectionCode) != -1) {
                console.warn(`Card '${name}'' already have collectionCode '${collectionCode}''`)
                return true
            }
            card.collectionCode.push(collectionCode)
            return card.save()
        })
    }

    findOneByName(name){
        return Card.findOne({imageName: name})
    }

    findManyByName(name){
        return Card.find({imageName: name})
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
        let index = 0
        let each = card => {
            if(!card) {
                console.log(`End import data from collection ${card.collectionCode}`)
                return
            }
            this.addCollection(card.name, card.collectionCode[0])
                .then(result => {
                    if(result == false) return this.createCard(card)
                }).then( _ => each(cards[++index]))
        }   

        each(cards[index])
    }

    importCollectionList(collectionList){
        return collectionList.forEach(collection => {
            this.importCollection(collection)
        })
    }

    importCollection(collection){
        console.log(`Start import collection ${collection.code}`)
        let cards = this.loadCollection(collection)
        return this.importCards(cards)
    }

}

module.exports = new CardService