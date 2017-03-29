/**
 * bubble sort
 */
const cloneArray = require('../utils/cloneArray');

function bubble_sort(source, asc = true) {
  const result = cloneArray(source);
  const len = result.length;
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > 0; j--) {
      if (asc ^ result[j] > result[j - 1]) {
        result[j - 1] = [result[j], result[j] = result[j - 1]][0];
      }
    }

  }
  return result;
}

module.exports = bubble_sort;
