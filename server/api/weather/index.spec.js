'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var weatherCtrlStub = {
  getWeather: 'weatherCtrl.getWeather',
  getWeatherByArray: 'weatherCtrl.getWeatherByArray'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var thingIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './weather.controller': weatherCtrlStub
});

describe('Weather API Router:', function() {
  it('should return an express router instance', function() {
    expect(thingIndex).to.equal(routerStub);
  });

  describe('GET /api/weather/:zipCode', function() {
    it('should route to weather.controller.getWeather', function() {
      return expect(routerStub.get
        .withArgs('/:zipCode', 'weatherCtrl.getWeather')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/weather', function() {
    it('should route to weather.controller.getWeatherByArray', function() {
      return expect(routerStub.get
          .withArgs('/', 'weatherCtrl.getWeatherByArray')
      ).to.have.been.calledOnce;
    });
  });
});
