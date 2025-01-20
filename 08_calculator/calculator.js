const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((total, currentItem => {
    return total + currentItem
  }, 1))
};

const multiply = function(...arg) {
  let arr = []
  for(let i = 0; i < arguments; i++){
    arr.push(arg)
  }
  return arr.reduce((total, currentItem => {
    return total * currentItem
  }, 1))
};

const power = function(a, b) {
  let res = 0
	for(let i = 0; i < b + 1; i++){
    res += a * a
  }
  return res
};

const factorial = function(a) {
	arr = []
  for(let i = 1; i < a+1; i++){
    arr.push(i)
  }
  arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
