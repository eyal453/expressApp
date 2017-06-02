/// <reference path="typings/node/node.d.ts"/>
/// <reference path="typings/express/express.d.ts"/>
/// <reference path="typings/body-parser/body-parser.d.ts"/>

var express = require('express');
var compression = require('compression');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = process.env.PORT || 9060;

var router = express.Router();

var routeInit = require('./router.init')(router);
routeInit.registerAll();

app.use('/api', function (req, res, next) {
	console.log(req.method + " received at " + req.originalUrl);
	next();
});
app.use('/api', router);

app.listen(port);
console.log("Starting web server on " + port);
