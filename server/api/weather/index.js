'use strict';

var express = require('express');
var controller = require('./weather.controller');

var router = express.Router();

router.get('/:name', controller.getWeather);

module.exports = router;
