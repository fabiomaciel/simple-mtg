'use strict';
const express = require('express'),
      user    = require('../models/user'),
      router = express.Router();

router.get('/',(req,res) => {
    res.locals.user = req.user;
    res.render('pages/home');
});


module.exports = router;
