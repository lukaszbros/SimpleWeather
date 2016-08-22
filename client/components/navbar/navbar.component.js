import angular from 'angular';
import {NavbarController} from './navbar.controller';

export default angular.module('simpleWeatherApp.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarController,
    controllerAs: 'navbar'
  })
  .name;
