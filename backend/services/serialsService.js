let _ = require('underscore');

let serialsData = require('../../data/serials.json');

exports.getSerialsData = function (req, res, next) {
  res.send(serialsData);
};

exports.getSerialData = function (req, res, next) {
  let id = Number.parseInt(req.params.id);
  let serial;

  serial = _.find(serialsData, (item) => {
    return item.id === id;
  });

  if (serial) {
    res.send(serial);
  } else {
    return res.status(404).send({error: "Not found"});
  }
};
