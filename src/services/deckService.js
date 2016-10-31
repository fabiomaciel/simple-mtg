'use strict'
const Deck    = require('../models/deck'),
      logger  = require('../util/logger'),
      Promise = require('bluebird')

class DeckService{

    createDeck(fields){
        let deck = new Deck(fields)
        return deck.save()
    }

    findDeckImage(id,lang){
        return new Promise ((resolve,reject)=>{
            this.findById(id).then(deck => {
                deck.findImageUrlById(id,lang).then(url=>{
                    resolve(url)
                });
            });
        });
    }

    findAllDecks(){
        return Deck.find()
    }

    findManyByName(name){
        return Deck.find({name: name})
    }

    findById(id){
        return Deck.findOne({_id: id})
    }

    findByUserId(id){
        return Deck.find({userId: id})
    }

    updateDeck(id,deckData){
        return Deck.findByIdAndUpdate(id, deckData, {new: true})
    }

}

module.exports = new DeckService
