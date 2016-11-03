'use strict'

const db = require('mongoose'),
      config = require('../../config/config')
      
db.Promise = require('bluebird');

db.connect(`mongodb://${config.mongo.host}/${config.mongo.database}:${config.mongo.port}`)

module.export = db.connection







