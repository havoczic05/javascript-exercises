const convertToCelsius = function (fTemp) {
  const cTemp = (fTemp - 32) / (9 / 5)
  if (cTemp % 1 == 0) {
    return cTemp
  }

  return parseFloat(cTemp.toFixed(1))

};

const convertToFahrenheit = function(cTemp) {
  const fTemp = (cTemp * (9 / 5)) + 32
  return parseFloat(fTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
