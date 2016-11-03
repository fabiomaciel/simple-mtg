'use strict'

const db = require('mongoose'),
      config = require('../../config/config')
      
db.Promise = require('bluebird');

db.connect(`mongodb://${config.mongo.url}`)

module.export = db.connection







