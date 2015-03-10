/*jshint node:true, mocha:true */

'use strict';

var should = require('should');
var better = require('../src/betterer.js').better;
var testStub = {
  someTest: function() { return ['o', '_']; }
};

describe('betterer', function() {
  it('better return the right function', function() {
    better('some test', testStub)().concat(testStub.someTest().reverse()).join('')
      .should.be.exactly('o__o');
  });
});
