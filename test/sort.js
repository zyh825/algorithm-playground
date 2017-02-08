const Benchmark = require('benchmark');
const orderBy = require('lodash/orderBy');

const array_generator = require('../utils/array_generator');
const bubble_sort = require('../sort/bubble');
const select_sort = require('../sort/select');
const quick_sort = require('../sort/quick');
const quick_v2_sort = require('../sort/quick_v2');

// unit test
const unit_array = array_generator(10);
// console.log(unit_array);
// console.log('native result', unit_array.sort((a, b) => a > b));
// console.log('native reverse result', unit_array.sort((a, b) => a < b));
// console.log('lodash result', orderBy(unit_array));
// console.log('lodash reverse result', orderBy(unit_array, [], 'desc'));
// console.log('bubble result', bubble_sort(unit_array));
// console.log('bubble reverse result', bubble_sort(unit_array, false));
// console.log('select result', select_sort(unit_array));
// console.log('select reverse result', select_sort(unit_array, false));
// console.log('quick result', quick_sort(unit_array));
// console.log('quick reverse result', quick_sort(unit_array, false));

// // performance test
const suite = new Benchmark.Suite;
suite
// .add('sort#bubble', function () {
//   bubble_sort(array_generator(100000));
//   bubble_sort(array_generator(100000), false);
// })
// .add('sort#select', function () {
//   select_sort(array_generator(100000));
//   select_sort(array_generator(100000), false);
// })
//   .add('lodash#orderBy', function () {
//     orderBy(array_generator(100000));
//     orderBy(array_generator(100000), [], 'desc');
//   })
//   .add('native#sort', function () {
//     array_generator(100000).sort((a, b) => a > b);
//     array_generator(100000).sort((a, b) => a < b);
//   })
  .add('sort#quick', function () {
    quick_sort(array_generator(100000));
    quick_sort(array_generator(100000), false);
  })
  .add('sort#quick_v2', function () {
    quick_v2_sort(array_generator(100000));
    quick_v2_sort(array_generator(100000), false);
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target), 'average:', (event.target.times.cycle * 1000).toFixed(6) + 'ms');
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });