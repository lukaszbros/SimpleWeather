import angular from 'angular';

export class NavbarComponent {}

export default angular.module('simpleWeatherApp.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
