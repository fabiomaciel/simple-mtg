'use strict';
const express      = require('express'),
      app          = express(),
      bodyParser   = require('body-parser'),
      passport     = require('passport'),
      cookieParser = require('cookie-parser'),
      LocalStrategy = require('passport-local').Strategy,
      flash = require('connect-flash'),
      validator    = require('express-validator'),
      home         = require('./routes/home'),
      login        = require('./routes/signin'),
      logout       = require('./routes/logout'),
      register     = require('./routes/signup'),
      cards        = require('./routes/cards'),
      decks        = require('./routes/decks'),
      matches      = require('./routes/matches'),
      users        = require('./routes/users');

app.get('/api/health',function(req,res){
    res.send({status: "IT'S ALIIIIIIVE"});
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(validator());

app.use(cookieParser());
app.use(require('express-session')({
    secret: 'BODY BUILDER PORRA',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

const Account = require('./models/user.js');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


app.use(express.static('public'));

app.set('view engine','ejs');

app.use('/api/login/', login);

app.use('/api/logout', loggedIn, logout);

app.use('/api/register',register);

app.use('/api/cards', loggedIn, cards);

app.use('/api/users', loggedIn, users);

app.use('/api/decks', loggedIn, decks);

app.use('/api/matches', loggedIn, matches);

app.use('/api/me', (req,res) => { if(req.user){ res.send(req.user)}else{ res.status(401).send()}} );

function loggedIn(req, res, next) {
    if(req.user) {
        next();
    }else{
        res.redirect('/');
    }
}

module.exports = app;
