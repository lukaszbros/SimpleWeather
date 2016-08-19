import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './weather.routes';
import {WeatherService} from './weather.service';

export class WeatherController {
  /*@ngInject*/
  constructor($stateParams, WeatherService) {
    this.WeatherService = WeatherService;
    this.selectedTownZipCode = $stateParams.zipCode;
    this.isLoaded = false;
  }

  $onInit() {
    this.WeatherService.getWeather(this.selectedTownZipCode)
      .then(() => {
        this.isLoaded = true;
      });
  }
}

export default angular.module('simpleWeatherApp.weather', [uiRouter])
  .config(routing)
  .factory('WeatherService', WeatherService)
  .component('weather', {
    template: require('./weather.html'),
    controller: WeatherController,
    controllerAs: 'weather'
  })
  .name;
