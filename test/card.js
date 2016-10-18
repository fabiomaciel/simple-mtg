'use strict'

const chai = require('chai'),
      should = chai.should()


const service = require('../src/services/cardService')
const M13 = require('./assets/M13.json')

describe('Card', () => {
  it('shout test if the cards have collection code', () => {
    let cards = service.loadCollection(M13)

    cards[0].should.have.property('collectionCode')
    cards[0].collectionCode.should.be.a('Array')
    cards[0].collectionCode[0].should.equal('M13')
    
  });
});