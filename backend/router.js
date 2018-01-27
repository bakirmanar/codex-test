let express = require('express');

// series
let seriesService = require('./services/seriesService');
let seriesRouter = express.Router();
seriesRouter.get('/', seriesService.getSeriesData);
exports.seriesRouter = seriesRouter;

// episodes
let episodesService = require('./services/episodesService');
let episodesRouter = express.Router();
episodesRouter.get('/', episodesService.getEpisodesData);
exports.episodesRouter = episodesRouter;

// router
let apiRouter = express.Router();
apiRouter.use('/series', seriesRouter);
apiRouter.use('/episodes', episodesRouter);
exports.apiRouter = apiRouter;
