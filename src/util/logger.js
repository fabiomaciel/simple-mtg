'use strict';

const winston     = require('winston'),
      moment      = require('moment'),
      util        = require('util'),
      config      = require('./../../config/config.js'),
      dailyRotate = require('winston-daily-rotate-file');

const timestamp = () =>{
    return util.format('[%s]',moment().format('YYYY-MM-DD HH:mm:ss.SSS'));
}


const logger = new (winston.Logger)({
    transports: [
        new (dailyRotate)({
            name: 'error',
            filename: config.log.error.filename,
            level: 'error',
            json: false,
            timestamp: timestamp,
            prettyPrint: true,
            colorize: true
        }),
        new (winston.transports.Console)({
            name: 'warn',
            level: 'warn',
            prettyPrint: true,
            json: false,
            timestamp: timestamp,
            colorize: true
        }),
		new (winston.transports.Console)({
            name: 'debug',
            level: 'debug',
            prettyPrint: true,
            json: false,
            timestamp: timestamp,
            colorize: true
        })
    ]     
});


module.exports = logger;
module.exports.stream = {
    write: (message,encoding) => {
        logger.info(message);
    }
}
