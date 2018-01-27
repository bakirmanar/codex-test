let seriesData = require('../../data/series.json');

exports.getSeriesData = function (req, res, next) {
  res.send(seriesData);
};
