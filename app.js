'use strict';
const config  = require('./config/config'),
      logger  = require('./src/util/logger.js'),
      app     = require('./src/index');



app.listen(config.port, process.env.OPENSHIFT_NODEJS_IP || "localhost");
logger.info(`Server initialized on port: ${config.port}`);
