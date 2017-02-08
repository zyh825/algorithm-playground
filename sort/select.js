/**
 * select sort
 */
const cloneArray = require('../utils/cloneArray');

function select_sort(source, asc = true) {
  const result = cloneArray(source);
  const len = result.length;
  for (let i = 0; i < len; i++) {
    let pos = i;
    let tmp = result[i];
    for (let j = i + 1; j < len; j++) {
      if (asc ^ result[j] > tmp) {
        pos = j;
        tmp = result[pos];
      }
    }
    result[pos] = [result[i], result[i] = result[pos]][0];
  }
  return result;
}

module.exports = select_sort;
