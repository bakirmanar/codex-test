let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let serial = new Schema({
  _id: {type: String},
  url: {type: String},
  name: {type: String},
  type: {type: String},
  language: {type: String},
  genres: {type: Array},
  status: {type: String},
  runtime: {type: Number},
  seasons: {type: Number},
  premiered: {type: String},
  officialSite: {type: String},
  schedule: {type: Object},
  rating: {type: Object},
  weight: {type: Number},
  network: {type: Object},
  webChannel: {type: Object},
  externals: {type: Object},
  image: {type: Object},
  summary: {type: Object},
  updated: {type: Number},
  _links: {type: Object},
  episodes: {type: Array}
});

let serialModel = mongoose.model('serial', serial);
module.exports.serialModel = serialModel;
