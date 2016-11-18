'use strict';
const express = require('express'),
      router  = express.Router(),
      logger  = require('../util/logger');

router.get('/',(req,res) => {
    req.logout();
    res.status(200).send();
});


module.exports = router;
