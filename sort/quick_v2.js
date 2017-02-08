const cloneArray = require('../utils/cloneArray');

function partition(array, leftPointer, rightPointer, asc) {
  if (leftPointer >= rightPointer) return false;
  let pivotValue = array[leftPointer];
  while (leftPointer < rightPointer) {
    if (asc) {
      while (leftPointer < rightPointer && (array[rightPointer] >= pivotValue)) {
        rightPointer--;
      }
      array[leftPointer] = array[rightPointer];
      // 左指针向右扫描
      while (leftPointer < rightPointer && (array[leftPointer] <= pivotValue)) {
        leftPointer++;
      }
      array[rightPointer] = array[leftPointer];
    } else {
      // 右指针向左扫描
      while (leftPointer < rightPointer && (array[rightPointer] <= pivotValue)) {
        rightPointer--;
      }
      array[leftPointer] = array[rightPointer];
      // 左指针向右扫描
      while (leftPointer < rightPointer && (array[leftPointer] >= pivotValue)) {
        leftPointer++;
      }
      array[rightPointer] = array[leftPointer];
    }
    array[leftPointer] = pivotValue;
  }
  return leftPointer;
}

function quick_sort(array, left, right, asc) {
  if (left >= right) return false;
  const pivotPos = partition(array, left, right, asc);
  quick_sort(array, left, pivotPos - 1, asc);
  quick_sort(array, pivotPos + 1, right, asc);
}

function facade(source, asc = true) {
  const array = cloneArray(source, asc);
  quick_sort(array, 0, array.length - 1, asc);
  return array;
}

module.exports = facade;

// console.log(facade([ 8, 5, 0, 3, 3, 9, 4, 1, 2, 7 ], false));