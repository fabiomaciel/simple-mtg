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
    if(req.query.name.length > 0){
        cards.findManyByName(new RegExp(req.query.name)).lean().exec((err,card)=>{
            res.send(JSON.stringify(card));
        });
    }
})

module.exports = router;
