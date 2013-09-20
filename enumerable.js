var multiples = function(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }

  return newArray;
}

var myEach = function(array, block) {

  for (var i = 0; i < array.length; i++) {
    block(array[i]);
  }
}

// just for testing myEach
var myFunc = function(number) {
  console.log(number / 2);
}

myEach([2, 4, 6], myFunc);


var myMap = function(array, block) {
  newArray = [];

  var localFunc = function(argument) {
    newArray.push(block(argument));
  }

  myEach(array, localFunc);

  return newArray;
}

// just to test mymap
var testFunc = function(number) {
  return number / 2;
}

var myInject = function(array, block) {
  var result = array.shift();

  var localFunc = function(argument) {
    result = block(result, argument);
  }

  myEach(array, localFunc);

  return result;
}

var newTestFunc = function(accum, el) {
  return accum * el;
}