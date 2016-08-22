'use strict';
import angular from 'angular';

export class NavbarController {

  /*@ngInject*/
  constructor(cities, $rootScope, $state, $stateParams) {
    this.townList = cities;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.$rootScope.$on('$stateChangeSuccess', () => {
      if(this.$stateParams.zipCode) {
        this.selectedTown = this.townList.filter(town => {
          return town.zipCode === this.$stateParams.zipCode;
        })[0]
      }
    });

  }

  showWeather(selectedTown) {
    if(angular.isDefined(selectedTown)) {
      this.$state.go('weather', {zipCode: selectedTown.zipCode});
    }
  }
}
