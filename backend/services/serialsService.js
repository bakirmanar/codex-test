let _ = require('underscore');

let serialModel = require('../models/mongoose').serialModel;
let errorHandler = require('../libs/errorHandler');


exports.getSerialsData = function (req, res, next) {
  return serialModel.find((err, serials) => {
    if (err) return errorHandler({code: 500}, req, res);

    return res.json(serials);
  });
};

exports.getSerialData = function (req, res, next) {
  let id = Number.parseInt(req.params.id);

  return serialModel.findOne({_id: id}, (err, serial) => {
    if (err) return errorHandler({code: 500}, req, res);
    if (!serial) return errorHandler({message: 'Not found', code: 404}, req, res);

    return res.json(serial);
  });
};
