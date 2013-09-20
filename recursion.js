var range = function(start, end) {
  var result = [];
  if (start === end) {
    return [end];
  }
  else {
    result = result.concat([start]);
    return result = result.concat(range(start + 1, end));
  }

  return result;
}

Array.prototype.recursive_sum = function() {
  if (this.length === 1) {
    return this[0];
  } else {
   return this[0] + this.slice(1).recursive_sum();
  }
}

var exponentOne = function(base, power) {
  if (power === 0) {
    return 1;
  } else {
   return base * exponentOne(base, power - 1) ;
  }
}

var exponentTwo = function(base, power) {
  if (power === 0) {
    return 1;
  } else if (power % 2 === 0) {
    var val = exponentTwo(base, power / 2);
    return val * val;
  } else {
    var val = exponentTwo(base, (power - 1) / 2)
    return base * val * val;
  }
}

var fibonacci = function(count) {
  if (count === 1) {
    return [0]
  } else if (count === 2) {
    return [0, 1]
  } else {
    var array = fibonacci(count - 1)
    return array.concat([array[count - 2] + array[count - 3]])
  }
}

var binarySearch = function(array, target) {
  var middle = Math.floor(array.length / 2);
  if (array[middle] === target) {
    return middle;
  }

  var left = array.slice(0, array.length / 2);
  var right = array.slice(array.length / 2);

  if (right[0] > target) {
    return binarySearch(left, target);
  }

  return middle + binarySearch(right, target);
}

var makeChange = function(amount, coinArray) {
  var  bestChange = []
  for (var i = 0; i < coinArray.length; i ++) {
    var newArray = [];
    if (amount === 0) {
      return []
    } else if (amount >= coinArray[i]) {
      newArray.push(coinArray[i]);
      newArray = newArray.concat(makeChange(amount - coinArray[i], coinArray));
    } else {
      newArray = newArray.concat(makeChange(amount, coinArray.slice(i + 1)));
    }
    if (bestChange.length === 0) {
      bestChange = newArray
    } else if (bestChange.length > newArray.length) {
      bestChange = newArray
    }
  }
  return bestChange
}

var mergeArrays = function(leftArray, rightArray) {
  var finalArray = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      finalArray.push(leftArray.shift());
    } else {
      finalArray.push(rightArray.shift());
    }
  }

  while (leftArray.length > 0) {
    finalArray.push(leftArray.shift());
  }

  while (rightArray.length > 0) {
    finalArray.push(rightArray.shift());
  }

  return finalArray;
}

var mergeSort = function(array) {
  if (array.length === 1) {
    return array;
  } else {
    var middle = Math.floor((array.length / 2));
    var left = mergeSort(array.slice(0, middle));
    var right = mergeSort(array.slice(middle));
  }

  return mergeArrays(left, right);
}

var subsets = function(array) {
  var newArray = [[]]
  if (array.length === 0) {
    return newArray
  } else {
    for (i = 0; i < array.length; i++) {
      for (j = i + 1; j <= array.length; j ++) {
        newArray.push(array.slice(i, j))
      }
    }
    return newArray//.concat(array.slice(1))
  }
}

var recursive_subsets = function(array) {
  var newArray = [];
  if (array.length === 0) {
    return [[]];
  } else {
    var previousSubsets = recursive_subsets(array.slice(0, array.length - 1));
    newArray = newArray.concat(previousSubsets);

    for (i = 0; i < previousSubsets.length; i++) {
      newArray.push(previousSubsets[i].concat([array[array.length - 1]]));
    }

    return newArray;
  }
}