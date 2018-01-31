"use strict";

let log = require('./logger');

module.exports = function (err, req, res, next) {
  let message = err.message || 'Server error.';

  log.error(message + '; Stack: ' + err.stack, {error: err});
  let code = err.code || 500;

  res.status(code).json({error: message});
};
