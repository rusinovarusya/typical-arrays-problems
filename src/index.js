
exports.min = function min (array) {
  if (array == undefined || array.length == 0) return 0;
  if (typeof array == Number) return array;
  else {
    let min = array[0];
    for (let key of array) {
      if (key < min) min = key;
    }
    return min;
  }
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) return 0;
  if (typeof array == Number) return array;
  else {
    let max = array[0];
    for (let key of array) {
      if (key > max) max = key;
    }
    return max;
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) return 0;
  if (typeof array == Number) return array;
  else {
    let sumItems = array.reduce((sum, current) => sum +current, 0);
    return sumItems / array.length;
  }
}
