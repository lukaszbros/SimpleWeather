import angular from 'angular';

export class NavbarComponent {

  /*@ngInject*/
  constructor(cities, $state) {
    this.townList = cities;
    this.$state = $state
  }

  showWeather(selectedTown) {
    if(angular.isDefined(selectedTown)) {
      this.$state.go('weather', {zipCode: selectedTown.zipCode});
    }
  }
}

export default angular.module('simpleWeatherApp.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent,
    controllerAs: 'navbar'
  })
  .name;
