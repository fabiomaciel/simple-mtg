'use strict'

const fs       = require('fs'), 
      bluebird = require('bluebird'), 
      request  = bluebird.promisify(require('request')),
      logger   = require('./util/logger.js')

const SETS_DIR = `${__dirname}/assets/sets`,
    SETS = require('./assets/SetCodes.json')

function isEnd(){
    return fs.readdirSync(SETS_DIR).length == (SETS.length +1);
}

function getCollection(index){
    let setCode = SETS[index]
    if(!setCode) {
        process.exit()
        return
    }
    request(`http://mtgjson.com/json/${setCode}.json`)
        .then(data => {
            fs.writeFile(`${SETS_DIR}/${setCode}.json`, data.body,
                err => {
                    if(err) logger.error(`Error while save file ${setCode}.json}`)
                    else logger.info(`Successfuly saved file ${setCode}.json`)
                    if(isEnd()) {
                        logger.info('End download files')
                    }
                    getCollection(index+1)
                })
        })
}

getCollection(0)



