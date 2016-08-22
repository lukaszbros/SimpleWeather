'use strict';

import angular from 'angular';

export default angular.module('simpleWeatherApp.constants', [])
  .constant('cities', [
    {name: 'New York', zipCode: '10001'},
    {name: 'Los Angeles', zipCode: '90013'},
    {name: 'Chicago', zipCode: '60601'}
  ])
  .constant('weatherMapping', [
    'wi-tornado',
    'wi-day-storm-showers',
    'wi-hurricane',
    'wi-thunderstorm',
    'wi-thunderstorm',
    'wi-rain-mix',
    'wi-rain-mix',
    'wi-rain-mix',
    'wi-hail',
    'wi-showers',
    'wi-hail',
    'wi-showers',
    'wi-showers',
    'wi-snow',
    'wi-day-snow',
    'wi-snow-wind',
    'wi-snow',
    'wi-hail',
    'wi-rain-mix',
    'wi-dust',
    'wi-fog',
    'wi-windy',
    'wi-smoke',
    'wi-strong-wind',
    'wi-strong-wind',
    'wi-snowflake-cold',
    'wi-cloudy',
    'wi-night-cloudy',
    'wi-day-cloudy',
    'wi-night-cloudy',
    'wi-day-cloudy',
    'wi-night-clear',
    'wi-day-sunny',
    'wi-night-partly-cloudy',
    'wi-day-sunny-overcast',
    'wi-rain-mix',
    'wi-hot',
    'wi-day-storm-showers',
    'wi-day-storm-showers',
    'wi-day-storm-showers',
    'wi-showers',
    'wi-snow-wind',
    'wi-snow',
    'wi-snow-wind',
    'wi-day-sunny-overcast',
    'wi-day-storm-showers',
    'wi-snow',
    'wi-day-storm-showers'
  ])
  .name;
