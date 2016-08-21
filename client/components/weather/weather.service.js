'use strict';

export function WeatherService($http) {
  'ngInject';

  var WeatherServiceDef = {
    /**
     * Return weather information for selected zip code
     *
     * @param  {String} zipCode - zip code of city to get weather for
     * @return {Promise}
     */
    getWeather(zipCode) {
      return $http.get(`/api/weather/${zipCode}`);
    }
  };

  return WeatherServiceDef;
}
