Array.prototype.bubbleSort = function() {
  var unsorted = true;

  while (unsorted) {
    unsorted = false;

    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        unsorted = true;
        // this[i], this[i + 1] = this[i + 1], this[i];
        temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }

  return this;
}

String.prototype.substrings = function() {
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      substring = this.substring(i, j);
      if (newArray.indexOf(substring) === -1) {
        newArray.push(substring);
      }
    }
  }

  return newArray
};