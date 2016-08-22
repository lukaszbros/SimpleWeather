'use strict';
import navbar from './navbar.component';

describe('Component: Navbar', () => {
  let scope,
      state,
      navbarComponent,
      cities = [{name: 'city1', zipCode: '1234'}, {name: 'city2', zipCode: '8888'}];

  beforeEach(angular.mock.module(navbar));

  beforeEach(inject(function($componentController, $rootScope) {
      scope = $rootScope.$new();
      state = {};
      state.go = sinon.spy();
      navbarComponent = $componentController('navbar', {
        cities: cities,
        $state: state,
        $scope: scope,
        $stateParams : {}
      });
  }));

  it('Should switch the state on town selection', () => {
    var town = { name: 'test', zipCode: '12345' };
    navbarComponent.showWeather(town);
    expect(state.go.called);
  });

  it('Should not switch the state if town is not selected', () => {
    navbarComponent.showWeather();
    expect(!state.go.called)
  });
});
