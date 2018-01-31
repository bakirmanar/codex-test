let mongoose = require('mongoose');
let logger = require('../libs/logger');

mongoose.connect('mongodb://localhost:27017/serials');

let db = mongoose.connection;

db.on('error', (err) => {
  logger.error('connection error:', err.message);
});
db.once('open', () => {
  logger.info("Connected to DB!");
});

let serialModel = require('./serialModel').serialModel;
let episodeModel = require('./episodesModel').episodeModel;

module.exports.serialModel = serialModel;
module.exports.episodeModel = episodeModel;
