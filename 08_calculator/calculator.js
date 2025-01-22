const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  const productOfAllNums = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return productOfAllNums
};

const multiply = function(arg) {
  let arr = []
  for(let i = 0; i < arg.length; i++){
    arr.push(arg[i])
  }
  const res = arr.reduce((total, currentItem) => {
    return total * currentItem
  }, 1)
  return res
};

const power = function(a, b) {
  let res = a
	for(let i = 0; i < b-1; i++){
    res *= a
  }
  return res
};

const factorial = function(a) {
	arr = []
  for(let i = 1; i < a+1; i++){
    arr.push(i)
  }
  const res = arr.reduce((total, currentItem) => {
  return total * currentItem;
  }, 1);
  return res
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
