'use strict';
const express = require('express'),
      app     = express(),
      register = require('./routes/signup'),
      home    = require('./routes/home'),
      cards   = require('./routes/cards'),
      decks   = require('./routes/decks'),
      matches = require('./routes/matches'),
      users   = require('./routes/users');

app.get('/health',function(req,res){
    res.send('It\'s ALIIIIIIVE');
});

app.use(express.static('public'));

app.set('view engine','ejs');

app.use('/',home);
app.use('/register',register);
app.use('/cards', cards);

app.use('/users', users);

app.use('/decks', decks);

app.use('/matches', matches);

module.exports = app;
