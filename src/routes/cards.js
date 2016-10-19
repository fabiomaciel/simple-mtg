'use strict';
const express = require('express'),
      router  = express.Router(),
      cards   = require('../services/cardService.js');


router.get('/:id', (req,res) => {
    cards.findById(req.params.id).lean().exec((err,card)=>{
            res.send(JSON.stringify(card));
        });
});

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
