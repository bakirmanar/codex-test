let express = require('express');

// serials
let serialsService = require('./services/serialsService');
let serialsRouter = express.Router();
serialsRouter.get('/', serialsService.getSerialsData);
serialsRouter.get('/:id', serialsService.getSerialData);

// episodes
let episodesService = require('./services/episodesService');
serialsRouter.get('/:id/episodes/', episodesService.getEpisodesData);
exports.serialsRouter = serialsRouter;

// router
let apiRouter = express.Router();
apiRouter.use('/serials', serialsRouter);
exports.apiRouter = apiRouter;
