'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('weather', {
    url: '/weather/:zipCode',
    template: '<weather></weather>'
  });
}
