'use strict';

var https = require('https');

var requestYahooApi = function(zipCode) {
  let queryZipCodes = '';
  if(Array.isArray(zipCode)) {
    queryZipCodes = '%20(';
    for(var i = 0, l = zipCode.length; i < l; i++) {
      queryZipCodes += `text%3D'${zipCode[i]}'`;
      if (i !== l-1) {
        queryZipCodes += '%20OR%20';
      }
    }
    queryZipCodes += ')';
  } else {
    queryZipCodes = `%20text%3D'${zipCode}'`;
  }
  const apiPath = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20placetype%3D'Zip'%20AND${queryZipCodes})&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

  return new Promise(function(response){
    https.get(apiPath, (yahooApiResponse) => {
      yahooApiResponse.setEncoding('binary');

      let resData = '';
      yahooApiResponse.on('data', function (chunk) {
        return resData += chunk;
      });
      yahooApiResponse.on('end', function () {
        const result = JSON.parse(resData);
        response(result);
      });
    });
  });
};

// Gets weather for selected location
export function getWeather(request, response) {
  const zipCode = request.params.zipCode;

  return requestYahooApi(zipCode)
    .then((result) => {
      if (result.query.count === 0) {
        response.status(404).send({err: 'No weather found'});
      } else {
        response.status(200).send(result.query.results.channel);
      }
    });
}


// Gets weather for location list
export function getWeatherByArray(request, response) {
  const zipCodes = JSON.parse(request.query.zipCode);
  if (zipCodes.length > 0) {
    return requestYahooApi(zipCodes)
      .then((result) => {
        if (result.query.count === 0) {
          response.status(404).send({err: 'No weather found'});
        } else {
          response.status(200).send(result.query.results.channel);
        }
      });
  } else {
    response.status(400).send({err: 'Missing cities zip codes'});
  }

}
