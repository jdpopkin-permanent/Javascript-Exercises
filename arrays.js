Array.prototype.uniq = function() {
  var finalArray = [];
  for (i = 0; i < this.length; i++) {
    if (finalArray.indexOf(this[i]) === -1) {
      finalArray.push(this[i]);
    }
  }
  return finalArray;
}

Array.prototype.twoSum = function() {
  var finalArray = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] === -this[j]) {
        finalArray.push([i, j]);
      }
    }
  }

  return finalArray;
}

Array.prototype.transpose = function() {
  var finalArray = [];

  for (var i = 0; i < this.length; i++) {
    var tempArray = [];
    for (var j = 0; j < this.length; j++) {
      tempArray.push(this[j][i]);
    }
    finalArray.push(tempArray);
  }

  return finalArray;
}