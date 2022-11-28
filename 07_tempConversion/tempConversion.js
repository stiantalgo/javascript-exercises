const convertToCelsius = function (far) {
  let sum = (far - 32) / 1.8;
  return Math.round(sum * 10 ) / 10;


};

const convertToFahrenheit = function (cels) {
  let sum = (cels * 1.8) + 32;
  return Math.round(sum * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
