'use strict';

import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import angularSpinners from 'angular-spinners';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from '../components/main/main.component';
import weather from '../components/weather/weather.component';
import constants from './app.constants';

import './app.scss';

angular.module('simpleWeatherApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, angularSpinners, navbar, footer, main, weather, constants])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['simpleWeatherApp'], {
      strictDi: false
    });
  });
