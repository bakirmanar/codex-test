"use strict";

let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');

let router = require('./backend/router');
let logger = require('./backend/libs/logger');
let config = require('./backend/libs/config');
let errorHandler = require('./backend/libs/errorHandler');

let app = express();
app.set('port', config.port);
app.use(express.static('app'));
app.use('/api', bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./dist'));
app.use(errorHandler);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SECRET'
}));

//routing
app.use('/api', router.apiRouter);

app.listen(app.get('port'), () => {
  logger.info('Server is up on port:' + app.get('port'));
});
