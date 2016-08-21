'use strict';

var express = require('express');
var controller = require('./weather.controller');

var router = express.Router();

router.get('/:zipCode', controller.getWeather);
router.get('/', controller.getWeatherByArray);

module.exports = router;
