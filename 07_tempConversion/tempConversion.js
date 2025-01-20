const convertToCelsius = function(num) {
  let res = (num - 32) * 5/9
  if(!Number.isInteger(res)){
    return Math.round(res * 10) / 10
  }
  else{
    return res
  }
};

const convertToFahrenheit = function(num) {
  let res = (9/5) * num + 32
  if(!Number.isInteger(res)){
    return Math.round(res * 10) / 10
  }
  else{
    return res
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
