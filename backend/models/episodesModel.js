let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let episode = new Schema({
  _id: {type: String},
  url: {type: String},
  name: {type: String},
  season: {type: Number},
  number: {type: Number},
  airdate: {type: String},
  airtime: {type: String},
  airstamp: {type: String},
  runtime: {type: Number},
  image: {type: Object},
  summary: {type: Object},
  _links: {type: Object},
});

let episodeModel = mongoose.model('episode', episode);
module.exports.episodeModel = episodeModel;
