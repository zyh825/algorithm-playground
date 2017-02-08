const cloneArray = require('../utils/cloneArray');

function part(array, left, right, asc) {
  if (left >= right) return;
  const mid = parseInt((left + right) / 2);
  part(array, left, mid, asc);
  part(array, mid + 1, right, asc);
  merge(array, left, mid, right, asc);
}

function merge(array, left, mid, right, asc) {
  const tmp = new Array(right - left + 1); // optimize
  let pointer = 0;

  let lp = left;
  let rp = mid + 1;
  while (lp <= mid && rp <= right) {
    if (asc) {
      tmp[pointer++] = array[lp] <= array[rp] ? array[lp++] : array[rp++];
    } else {
      tmp[pointer++] = array[lp] >= array[rp] ? array[lp++] : array[rp++];
    }
  }
  while (lp <= mid) {
    tmp[pointer++] = array[lp++];
  }
  while (rp <= right) {
    tmp[pointer++] = array[rp++];
  }
  for (let i = 0; i < pointer; i++) {
    array[i + left] = tmp[i];
  }
}

function merge_sort(source, asc = true) {
  const array = cloneArray(source);
  part(array, 0, array.length - 1, asc);
  return array;
}

module.exports = merge_sort;

// console.log(merge_sort([8, 5, 0, 3, 3, 9, 4, 1, 2, 7], true));