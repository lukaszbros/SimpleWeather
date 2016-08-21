'use strict';

var https = require('https');

// Gets weather for selected location
export function getWeather(request, response) {
  const apiPath = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20placetype%3D'Zip'%20AND%20text%3D'${request.params.name}')&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

  return https.get(apiPath, (yahooApiResponse) => {
    yahooApiResponse.setEncoding('binary');

    let resData = '';
    yahooApiResponse.on('data', function (chunk) {
      return resData += chunk;
    });
    yahooApiResponse.on('end', function () {
      const result = JSON.parse(resData);
      if (result.query.count === 0) {
        response.status(404).send({err: 'No weather found'});
      } else {
        response.status(200).send(result.query.results.channel);
      }
    });
  });
}
