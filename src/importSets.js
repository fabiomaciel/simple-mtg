'use strict'

const fs = require('fs'), 
    bluebird = require('bluebird'), 
    request = bluebird.promisify(require('request'))

const service = require('./services/cardService'),
    SETS_DIR = `${__dirname}/assets/sets`,
    SETS = require('./assets/SetCodes.json')


function importCollection(index){
    let setCode = SETS[index]
    if(!setCode) {
        process.exit()
        return
    }
    service.importCollection(require(`${SETS_DIR}/${setCode}.json`))
        .then(_ => {
            importCollection(index+1)            
        })
}

importCollection(0)



