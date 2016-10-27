'use strict';
const express = require('express'),
      app     = express(),
      bodyParser = require('body-parser'),
      validator = require('express-validator'),
      home    = require('./routes/home'),
      register = require('./routes/signup'),
      cards   = require('./routes/cards'),
      decks   = require('./routes/decks'),
      matches = require('./routes/matches'),
      users   = require('./routes/users'),
      logger  = require('./util/logger.js'),
      config  = require('../config/config');


app.get('/health',function(req,res){
    res.send('It\'s ALIIIIIIVE');
});

app.use(express.static('public'));

app.use(bodyParser());
app.use(validator());

app.set('view engine','ejs');

app.use('/',home);
app.use('/register',register);
app.use('/cards', cards);

app.use('/users', users);

app.use('/decks', decks);

app.use('/matches', matches);

app.listen(config.port);
logger.info(`Server initialized on port: ${config.port}`);

