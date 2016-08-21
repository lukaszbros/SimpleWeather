'use strict';

var app = require('../..');
import request from 'supertest';

describe('Weather API:', function() {
  describe('GET /api/weather/:zipCode', function () {
    let weather;
    const cityZipCode = 10001,
        noCityZipCode = 1000000000;

    it('should respond with JSON and weather Object', function (done) {
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

  describe('GET /api/weather', function () {
    let weather;

    it('should respond with JSON and weather Array', function (done) {
      request(app)
          .get('/api/weather?zipCode=[10001, 60001]')
          .expect(200)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            if (err) {
              return done(err);
            }
            weather = res.body;
            expect(weather).to.be.instanceOf(Array);
            done();
          });
    });

    it('should respond with 400', function (done) {
      request(app)
          .get('/api/weather?zipCode=')
          .expect(404)
          .expect('Content-Type', /json/)
          .end((err, res) => {
            done();
          });
    });
  });
});