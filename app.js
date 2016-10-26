'use strict';
const config  = require('./config/config'),
      logger  = require('./src/util/logger.js'),
      app     = require('./src/index');



app.listen(config.port);
logger.info(`Server initialized on port: ${config.port}`);
