'use strict'

var chai = require('chai');
var should = chai.should();

describe('Test', () => {
  it('should have any tests', () => {
    var str = "hue"
    str.should.be.a('string')
  });
});