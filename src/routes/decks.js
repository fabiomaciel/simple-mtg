'use strict'; 
const express = require('express'),
      router = express.Router();

router.get('/',(req,res) => {
    res.send('JSON com todos decks');
});

router.get('/:user',(req,res) => {
    res.send(`JSON com decks do usuario: ${req.params.user} `);
});

router.get('/:user/:id', (req,res) => {
    res.send(`JSON com deck de id: ${req.params.id}  do usuario: ${req.params.user}   `);
});


module.exports = router;
