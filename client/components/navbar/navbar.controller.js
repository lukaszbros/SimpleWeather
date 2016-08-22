'use strict';
import angular from 'angular';

export class NavbarController {

  /*@ngInject*/
  constructor(cities, $state) {
    this.townList = cities;
    this.$state = $state;
  }

  showWeather(selectedTown) {
    if(angular.isDefined(selectedTown)) {
      this.$state.go('weather', {zipCode: selectedTown.zipCode});
    }
  }
}
