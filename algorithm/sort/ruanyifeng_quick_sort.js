const quicksort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat([pivot], quicksort(right));
};

// var array = [8, 7, 0, 7, 5, 2, 5, 3, 1];

module.exports = quicksort;

// console.log(quicksort(array));
// console.log(array);
