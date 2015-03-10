/*jshint node:true */

'use strict';

var camelCase = require('camel-case');

exports.better = function(description, context) {
  return context[camelCase(description)];
};
