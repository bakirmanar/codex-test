let _ = require('underscore');

let errorHandler = require('../libs/errorHandler');
let mongoose = require('../models/mongoose');
let serialModel = mongoose.serialModel;
let episodeModel = mongoose.episodeModel;

exports.getEpisodesData = function (req, res, next) {
  let season = Number.parseInt(req.query.season) ;
  let serialId = Number.parseInt(req.params.id);

  return serialModel.findOne({_id: serialId}, (err, serial) => {
    if (err) return errorHandler({code: 500}, req, res);
    if (!serial) return errorHandler({message: 'Not found', code: 404}, req, res);

    let episodesIds = serial.episodes || [];
    let options = {_id: {$in: episodesIds}};
    !Number.isNaN(season) && (options.season = season);

    return episodeModel.find(options, (err, episodes) => {
      if (err) return errorHandler({code: 500}, req, res);

      return res.json(episodes);
    });
  });
};
