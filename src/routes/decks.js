'use strict'; 
const express = require('express'),
      router  = express.Router(),
      decks   = require('../services/deckService.js');

router.get('/:id', (req,res) => {
    decks.findById(req.params.id).lean().exec((err,deck)=>{
            if(deck == undefined){
                res.sendStatus(404);
            }else{
                res.send(JSON.stringify(deck));
            }
        });
});


router.get('/user/:id', (req,res) => {
    decks.findByUserId(req.params.id).lean().exec((err,deck)=>{
            if(deck == undefined){
                res.sendStatus(404);
            }else{
                res.send(JSON.stringify(deck));
            }
        });
});

router.get('/', (req,res) => {
    if(req.query.name && req.query.name.length > 0){
        decks.findManyByName(new RegExp(req.query.name)).lean().exec((err,deck)=>{
            res.send(JSON.stringify(deck));
        });
    }else{
        decks.findAllDecks().lean().exec((err,deck)=>{
            res.send(JSON.stringify(deck));
        });
    }
})


router.patch('/:id',(req,res) => {
    decks.updateDeck(req.params.id,req.body).lean().exec((err,deck)=>{
            res.send(JSON.stringify(deck));
        });
});

router.post('/',(req,res) => {
    decks.createDeck(req.body).then((decksaved)=>{
             res.send(decksaved._id);
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

module.exports = router;
