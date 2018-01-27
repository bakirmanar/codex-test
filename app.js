"use strict";

let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let cookieParser = require('cookie-parser');

let router = require('./backend/router');
let logger = require('./backend/cms/logger');
let config = require('./backend/cms/config');
let errorHandler = require('./backend/cms/errorHandler');

let app = express();
app.set('port', config.port);
app.use(express.static('app'));
app.use('/api', bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('./dist'));
app.use(errorHandler);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(session({saveUninitialized: true,
  resave: true,
  secret: 'SECRET' }));

//routing
app.use('/api', router.apiRouter);

app.listen(app.get('port'), function () {
  logger.info('Server is up on port:' + app.get('port'));
});
