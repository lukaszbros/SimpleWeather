'use strict';

export function WeatherService() {
  'ngInject';

  var WeatherServiceDef = {
    /**
     * Return weather information for selected zip code
     *
     * @param  {String} zipCode - zip code of city to get weather for
     * @return {Promise}
     */
    getWeather(zipCode) {
      return zipCode;
    }
  };

  return WeatherServiceDef;
}
