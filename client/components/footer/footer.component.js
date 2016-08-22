import angular from 'angular';
import {FooterController} from './footer.controller';

export default angular.module('simpleWeatherApp.footer', [])
  .component('footer', {
    template: require('./footer.html'),
    controller: FooterController,
    controllerAs: 'footer'
  })
  .name;
