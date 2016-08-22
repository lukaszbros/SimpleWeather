'use strict';

export class WeatherController {

  /*@ngInject*/
  constructor($stateParams, weatherMapping, WeatherService) {
    this.WeatherService = WeatherService;
    this.selectedTownZipCode = $stateParams.zipCode;
    this.isLoaded = false;
    this.weatherMapping = weatherMapping;
  }

  $onInit() {
    this.error = undefined;
    this.WeatherService.getWeather(this.selectedTownZipCode)
      .then(response => {
        response.data.atmosphere.pressure = Math.round(response.data.atmosphere.pressure);
        this.forecast = response.data;
        this.isLoaded = true;
      }, errorResponse => {
        if(errorResponse.data.err) {
          this.error = errorResponse.data.err;
        } else {
          this.error = 'Some error occurred. Please try again.';
        }

        this.isLoaded = true;
      });
  }
}
