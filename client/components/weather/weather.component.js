import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './weather.routes';

export class WeatherController {}

export default angular.module('simpleWeatherApp.weather', [uiRouter])
  .config(routing)
  .component('weather', {
    template: require('./weather.html'),
    controller: WeatherController
  })
  .name;
