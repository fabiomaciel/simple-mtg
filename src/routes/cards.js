'use strict';
const express = require('express'),
      router  = express.Router(),
      cards   = require('../services/cardService.js');

/**
 * @api {get} /cards/:id Request Card information by id
 * @apiName GetCard
 * @apiGroup Card
 *
 * @apiParam {Number} id Cards unique ID
 * @apiSuccess {String} _id Card id on Mongo
 * @apiSuccess {String} artist Card artist name
 * @apiSuccess {Number} cmc Card mana cust converted
 * @apiSuccess {String} flavor Card flavor text
 * @apiSuccess {String} id Card unique id
 * @apiSuccess {String} imageName Card's name on lowercase
 * @apiSuccess {String} layout Card's layout
 * @apiSuccess {String} manaCost Card's mana cost
 * @apiSuccess {Number} mciNumber ?
 * @apiSuccess {String} name Card's name
 * @apiSuccess {Number} number Card's collection number
 * @apiSuccess {String} power Card's power
 * @apiSuccess {String} rarity Card's rarity
 * @apiSuccess {String} text Card's Text
 * @apiSuccess {String} toughness Card's toughness
 * @apiSuccess {String} type Card's type
 * @apiSuccess {Array} supertypes Card's supertypes
 * @apiSuccess {Array} subtypes Card's subtypes
 * @apiSuccess {Array} types Card's types
 * @apiSuccess {Array} colors Card's colors
 * @apiSuccess {Array} colorIdentity Card's color identity
 * @apiSuccess {Array} collectionCode All collection that this card apppears
 * @apiSuccess {Array} names ?
 * @apiSuccess {Number} _v ?
 *
 * @apiSuccessExample {json} Succes-Response:
 *  HTTP/1.1 200 OK
 *  {
 *  _id: "5807e11bbe54fa68a4de26c6",
 *  artist: "Mark Zug",
 *  cmc: 1,
 *  flavor: ""Beg me for life, and I will fill you with the glory of Phyrexian perfection."",
 *  id: "3ce08578e9f4ef206fd44eced0fab9260e12ce18",
 *  imageName: "glistener elf",
 *  layout: "normal",
 *  manaCost: "{G}",
 *  mciNumber: 140,
 *  name: "Glistener Elf",
 *  number: 140,
 *  power: "1",
 *  rarity: "Special",
 *  text: "Infect (This creature deals damage to creatures in the form of -1/-1 counters and to players in the form of poison counters.)",
 *  toughness: "1",
 *  type: "Creature — Elf Warrior",
 *  supertypes: [ ],
 *  subtypes: [
 *  "Elf",
 *  "Warrior"
 *  ],
 *  types: [
 *  "Creature"
 *  ],
 *  colors: [
 *  "Green"
 *  ],
 *  colorIdentity: [ ],
 *  collectionCode: [
 *  "pFNM",
 *  "NPH"
 *  ],
 *  names: [ ],
 *  __v: 1
 *  }
 *
 */

router.get('/:id/image/:lang', (req,res) => {
    cards.findById(req.params.id)
        .then(card=>{
            res.send(card.imageUrl(req.params.lang));
        });
});


router.get('/:id', (req,res) => {
    cards.findById(req.params.id).lean().exec((err,card)=>{
            if(card){
                res.send(JSON.stringify(card));
            }else{
                res.sendStatus(404);
            }
        });
});


/**
 * @api {get} /cards?name=:name Request Card information by name
 * @apiName GetCardByName
 * @apiGroup Card
 * @apiSuccess {Array} Number Array of cards
 */

/**
 * @api {get} /cards?collection=:collectionCode Request Cards by collection code
 * @apiName GetCardsByCollection
 * @apiGroup Card
 * @apiSuccess {Array} Number Array of cards
 */

router.get('/', (req,res) => {
    if(req.query.name && req.query.name.length > 0){
        cards.findManyByName(new RegExp(req.query.name)).lean().exec((err,card)=>{
            res.send(JSON.stringify(card));
        });
    }else if(req.query.collection && req.query.collection.length > 0){
        cards.findByCollection(new RegExp(req.query.collection)).lean().exec((err,card)=>{
            res.send(JSON.stringify(card));
        });
    }else{
        res.sendStatus(404);
    }
})

module.exports = router;
