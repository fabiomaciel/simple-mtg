'use strict'

const db = require('mongoose')
db.connect('mongodb://localhost/test')

module.export = db.connection







