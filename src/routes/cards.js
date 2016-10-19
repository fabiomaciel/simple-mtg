'use strict';
const express = require('express'),
      router  = express.Router(),
      cards   = require('../services/cardService.js');


router.get('/:id', (req,res) => {
    res.send(`JSON com carta do id: ${req.params.id} `);
});

router.get('/', (req,res) => {
    if(req.query.name.length > 0){
        cards.findByName(new RegExp(req.query.name)).lean().exec((err,card)=>{
            res.send(JSON.stringify(card));
        });
    }
})

module.exports = router;
