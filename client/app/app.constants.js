'use strict';

import angular from 'angular';

export default angular.module('simpleWeatherApp.constants', [])
  .constant('cities', [{name: 'New York', zipCode: '10001'}, {name: 'Los Angeles', zipCode: '90013'}, {name: 'Chicago', zipCode: '60601'}])
  .name;
