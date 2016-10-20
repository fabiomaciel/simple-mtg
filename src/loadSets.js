'use strict'

const fs = require('fs'), 
    bluebird = require('bluebird'), 
    request = bluebird.promisify(require('request'))

const service = require('./services/cardService'),
    SETS_DIR = `${__dirname}/assets/sets`,
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
                    if(err) console.error(`Error while save file ${setCode}.json}`)
                    else console.log(`Successfuly saved file ${setCode}.json`)
                    if(isEnd()) {
                        console.log('End download files')
                    }
                    getCollection(index+1)
                })
        })
}

getCollection(0)



