'use strict';
const express = require('express'),
      router = express.Router(),
      logger   = require('../util/logger');

router.get('/',(req,res) => {
    req.logout();
    res.redirect('/');
});


module.exports = router;
