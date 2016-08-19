import angular from 'angular';

export class NavbarComponent {

  /*@ngInject*/
  constructor(cities) {
    this.townList = cities;
  }

  showWeather(selectedTown) {
    if (angular.isDefined(selectedTown)) {
      console.log(`call selected town zip ${selectedTown.zipCode}`);
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
