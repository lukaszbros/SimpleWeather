'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('weather', {
    url: '/:zipCode',
    template: '<weather></weather>'
  });
}
