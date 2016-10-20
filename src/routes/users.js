'use strict';
const express    = require('express'),
      router     = express.Router(),
      bodyParser = require('body-parser'),
      users      = require('../services/userService.js');

router.use(bodyParser.json());

/**
 * @api {get} /user/:id Request User information by id
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Cards unique ID
 *
 */

router.get('/:id', (req,res) => {
    users.findById(req.params.id).lean().exec((err,user)=>{
            if(user == undefined){
                res.sendStatus(404);
            }else{
                res.send(JSON.stringify(user));
            }
        });
});


/**
 * @api {get} /user?username=:username Request User information by username
 * @apiName GetUserByUserName
 * @apiGroup User
 * @apiSuccess {Array} Number Array of users
 */

router.get('/', (req,res) => {
    if(Object.keys(req.query).length === 0){
         users.findAllUsers().lean().exec((err,user)=>{
           res.send(JSON.stringify(user));
        });
    }
    else if(req.query.username && req.query.username.length > 0){
        users.findManyUserByName(new RegExp(req.query.username)).lean().exec((err,user)=>{
            res.send(JSON.stringify(user));
        });
    }else{
        res.sendStatus(404);
    }
});

/**
 * @api {post} /user Create new user 
 * @apiName CreateNewUser
 * @apiGroup User
 * 
 * @apiParam {String} username User's username 
 * @apiParam {String} password User's password
 * @apiParam {String} entryDate User's entry date
 * @apiParam {String} email User's email
 *
 * @apiSuccess {String} All Usuario cadastrado com sucesso
 *
 */

router.post('/',(req,res) => {
    users.createUser(req.body).then((userSaved)=>{
         res.send(userSaved._id);
    }).catch((err)=>{
        res.status(400).send(err);
    });
});

/**
 * @api {patch} /user Create new user 
 * @apiName CreateNewUser
 * @apiGroup User
 *
 * @apiParam {Number} id User's unique id
 * @apiParam {String} username User's username 
 * @apiParam {String} password User's password
 * @apiParam {String} entryDate User's entry date
 * @apiParam {String} email User's email
 *
 * @apiSuccess {String} All usuarios fields
 *
 */

router.patch('/:id',(req,res) => {
    users.updateUser(req.params.id,req.body).lean().exec((err,user)=>{
            res.send(JSON.stringify(user));
        });
});

module.exports = router;
