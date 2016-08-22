'use strict';

export class WeatherController {

  /*@ngInject*/
  constructor($stateParams, weatherMapping, WeatherService) {
    this.WeatherService = WeatherService;
    this.selectedTownZipCode = $stateParams.zipCode;
    this.isLoaded = false;
    this.weatherMapping = weatherMapping
  }

  $onInit() {
    this.WeatherService.getWeather(this.selectedTownZipCode)
        .then((response) => {
          response.data.atmosphere.pressure = Math.round(response.data.atmosphere.pressure);
          this.forecast = response.data;
          this.isLoaded = true;
        });
  }
}
