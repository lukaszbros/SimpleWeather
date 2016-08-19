'use strict';

import weather from './weather.component';

describe('Component: Weather', function() {
  var scope,
      stateParams,
      weatherComponent;

  beforeEach(angular.mock.module(weather));

  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    stateParams = sinon.spy();
    weatherComponent = $componentController('weather', {
      $stateParams: stateParams,
      $scope: scope
    });
  }));
});
