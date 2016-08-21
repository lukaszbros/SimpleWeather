import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './weather.routes';
import {WeatherService} from './weather.service';
import {WeatherController} from './weather.controller';

export default angular.module('simpleWeatherApp.weather', [uiRouter])
  .config(routing)
  .factory('WeatherService', WeatherService)
  .component('weather', {
    template: require('./weather.html'),
    controller: WeatherController,
    controllerAs: 'weather'
  })
  .name;
