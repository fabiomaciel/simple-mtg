'use strict'
const Card   = require('../models/card'),
      logger = require('../util/logger'),
      Promise  = require('bluebird')

class CardService{

    createCard(fields){
        let card = new Card(fields)
        return card.save().then(()=>{}, ()=>{})
    }

    addCollection(name, collectionCode){
        return this.findOneByName(name.toLowerCase()).then(card => {
            if(!card) {
                return false
            }
            if(card.collectionCode.indexOf(collectionCode) != -1) {
                logger.warn(`Card '${name}'' already have collectionCode '${collectionCode}''`)
                return true
            }
            card.collectionCode.push(collectionCode)
            return card.save()
        })
    }

    findCardImage(id,lang){
        return new Promise ((resolve,reject)=>{
            this.findById(id).then(card => {
                card.findImageUrlById(id,lang).then(url=>{
                    resolve(url)
                });
            });
        });
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

    importCards(cards, collectionCode){
        let index = 0
        let each = card => {
            if(!card) {
                logger.info(`End import data from collection ${collectionCode}`)
                return Promise.resolve(true)
            }
            return this.addCollection(card.name, card.collectionCode[0])
                .then(result => {
                    if(result == false) return this.createCard(card)
                }).then( _ => each(cards[++index]))
        }   

        return each(cards[index])
    }

    importCollectionList(collectionList){
        return collectionList.forEach(collection => {
            this.importCollection(collection)
        })
    }

    importCollection(collection){
        logger.info(`Start import collection ${collection.code}`)
        let cards = this.loadCollection(collection)
        return this.importCards(cards, collection.code)
    }

}

module.exports = new CardService
