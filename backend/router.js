let express = require('express');

// serials
let serialsService = require('./services/serialsService');
let serialsRouter = express.Router();
serialsRouter.get('/', serialsService.getserialsData);
exports.serialsRouter = serialsRouter;

// episodes
let episodesService = require('./services/episodesService');
let episodesRouter = express.Router();
episodesRouter.get('/', episodesService.getEpisodesData);
exports.episodesRouter = episodesRouter;

// router
let apiRouter = express.Router();
apiRouter.use('/serials', serialsRouter);
apiRouter.use('/episodes', episodesRouter);
exports.apiRouter = apiRouter;
