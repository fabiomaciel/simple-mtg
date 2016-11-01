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

app.get('/health',function(req,res){
    res.send('It\'s ALIIIIIIVE');
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

app.use('/home', loggedIn,  home);

app.use('/', login);

app.use('/logout', loggedIn, logout);

app.use('/register',register);

app.use('/cards', loggedIn, cards);

app.use('/users', loggedIn, users);

app.use('/decks', loggedIn, decks);

app.use('/matches', loggedIn, matches);

function loggedIn(req, res, next) {
    if(req.user) {
        next();
    }else{
        res.redirect('/');
    }
}

module.exports = app;
