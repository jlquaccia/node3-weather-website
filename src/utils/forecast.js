const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.weatherstack.com/current?access_key=084978cdabe61383357fd5cad7c8f082&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      console.log(body.error);
      callback('Unable to find location.', undefined);
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out and it feels like ${body.current.feelslike} degrees. The humidity is ${body.current.humidity}.`);
    }
  });
};

module.exports = forecast;
