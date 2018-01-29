let serialsData = require('../../data/serials.json');

exports.getserialsData = function (req, res, next) {
  res.send(serialsData);
};
