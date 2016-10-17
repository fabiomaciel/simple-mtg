'use strict';
var express = require('express'),
    app     = express(),
    home    = require('./routes/home'),
    cards   = require('./routes/cards'),
    matches = require('./routes/matches'),
    config  = require('../config/config');

app.get('/health',function(req,res){
    res.send('It\'s ALIIIIIIVE');
});

app.use('/',home);

app.use('/cards', cards);

app.use('/mathces'. matches);

app.listen(config.port);
console.log(`Server initialized on port: ${config.port}`);

