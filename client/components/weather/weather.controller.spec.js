'use strict';
import weather from './weather.component';

describe('Component: Weather', () => {
  const zipCode = '123';
  let scope,
      stateParams,
      weatherComponent,
      WeatherService;

  beforeEach(angular.mock.module(weather));

  beforeEach(inject(function($componentController, $rootScope) {
    scope = $rootScope.$new();
    stateParams = {
      zipCode: zipCode
    };
    WeatherService = {
      getWeather: sinon.spy()
    };
    weatherComponent = $componentController('weather', {
      $stateParams: stateParams,
      $scope: scope,
      WeatherService: WeatherService
    });
  }));

  it('Should load weather from weather service', () => {
    expect(WeatherService.getWeather.called);
    expect(weatherComponent.isLoaded);
  })
});
