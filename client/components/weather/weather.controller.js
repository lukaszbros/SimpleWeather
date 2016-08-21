'use strict';

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
