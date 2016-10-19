'use strict';
const express = require('express'),
      router = express.Router();

router.get('/',(req,res) => {
    res.send('Olá eu sou o goku');
});


module.exports = router;
