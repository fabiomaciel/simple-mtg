'use strict';
const express = require('express'),
      router = express.Router();

router.get('/',(req,res) => {
    res.send('JSON com todas cartas');
});

router.get('/:id', (req,res) => {
    res.send(`JSON com carta do id: ${req.params.id} `);
});


module.exports = router;
