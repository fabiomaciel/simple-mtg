'use strict'
const Card   = require('../models/card'),
      logger = require('../util/logger'),
      Promise  = require('bluebird')

class CardService{

    createCard(fields){
        let card = new Card(fields)
        return card.save().then(()=>{}, ()=>{})
    }

    addCollection(name, code, num){
        return this.findOneByName(name.toLowerCase()).then(card => {
            if(!card) {
                return false
            }
            let codes = card.collections.filter(c => c.code == code)
            if(codes.length > 0) {
                logger.warn(`Card '${name}'' already have collection code '${code}''`)
                return true
            }
            card.collections.push({code: code, number: num})
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
            card.collections = []
            card.number = card.number || card.mciNumber
            delete card.mciNumber 
            card.collections.push({
                number: card.number,
                code: collection.code
            }) 
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
            if(card.number && card.number.match(/^\de\/en\/\d+/)) {
                card.number = card.number.split('/')[2]
            } 
            return this.addCollection(card.name, collectionCode, card.number)
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
