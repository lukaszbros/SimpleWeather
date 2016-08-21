'use strict';

var app = require('../..');
import request from 'supertest';

describe('Weather API:', function() {
  describe('GET /api/weather', function () {
    let weather;
    const cityZipCode = 10001,
        noCityZipCode = 1000000000;

    it('should respond with JSON', function (done) {
      request(app)
        .get(`/api/weather/${cityZipCode}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          weather = res.body;
          expect(weather).to.be.instanceOf(Object);
          done();
        });
    });

    it('should respond with 400', function (done) {
      request(app)
          .get(`/api/weather/${noCityZipCode}`)
          .expect(404)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            done();
          });
    });
  });
});