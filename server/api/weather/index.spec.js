'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var thingCtrlStub = {
  getWeather: 'weatherCtrl.getWeather'
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
  './thing.controller': thingCtrlStub
});

describe('Thing API Router:', function() {
  it('should return an express router instance', function() {
    expect(thingIndex).to.equal(routerStub);
  });

  describe('GET /api/weather/:name', function() {
    it('should route to weather.controller.getWeather', function() {
      return expect(routerStub.get
        .withArgs('/:name', 'weatherCtrl.getWeather')
        ).to.have.been.calledOnce;
    });
  });
});
