'use strict';
const express = require('express'),
      app     = express(),
      home    = require('./routes/home'),
      cards   = require('./routes/cards'),
      decks   = require('./routes/decks'),
      matches = require('./routes/matches'),
      users   = require('./routes/users'),
      logger  = require('./util/logger.js'),
      config  = require('../config/config');

app.get('/health',function(req,res){
    res.send('It\'s ALIIIIIIVE');
});

app.use('/',home);

app.use('/cards', cards);

app.use('/users', users);

app.use('/decks', decks);

app.use('/matches', matches);

app.listen(config.port);
logger.info(`Server initialized on port: ${config.port}`);

