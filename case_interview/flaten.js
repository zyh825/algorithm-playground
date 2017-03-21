const assert = require('assert');

/**
 *  Question:
 *    Input: [1, [2, [3, [4], [5, 6]]]]
 *    Output: [1,2,3,4,5]
 * */

const arr = [1, [2, [3, [4], [5, 6]]]];

function facade(arr) {
  const result = [];

  function flatten(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    });
  }

  flatten(arr);
  return result;
}


module.exports = facade;

// console.log(facade(arr));
// console.log(facade([1, 2, 3]));
