import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';
import {MainController} from './main.controller';

export default angular.module('simpleWeatherApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
