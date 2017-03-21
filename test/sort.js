const Benchmark = require('benchmark');
const orderBy = require('lodash/orderBy');

const array_generator = require('../utils/array_generator');
const bubble_sort = require('../sort/bubble');
const select_sort = require('../sort/select');
const quick_sort = require('../sort/quick');
const quick_v2_sort = require('../sort/quick_v2');
const merge_sort = require('../sort/merge');
const ryf_qsort = require('../sort/ruanyifeng_quick_sort');

const loop = 5;

// unit test
// const unit_array = array_generator(10);
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
  .add('sort#bubble', function () {
    bubble_sort(array_generator(10000));
  })
  .add('sort#select', function () {
    select_sort(array_generator(10000));
  })
  .add('lodash#orderBy', function () {
    orderBy(array_generator(10000));
  })
  .add('native#sort', function () {
    let tmp = loop;
    while (tmp--) {
      array_generator(10000).sort((a, b) => a > b);
      array_generator(10000).sort((a, b) => a < b);
    }
  })
  .add('sort#merge', function () {
    let tmp = loop;
    while (tmp--) {
      merge_sort(array_generator(10000));
      merge_sort(array_generator(10000), false);
    }
  })
  .add('sort#quick', function () {
    let tmp = loop;
    while (tmp--) {
      quick_sort(array_generator(10000));
    }
  })
  .add('sort#quick_v2', function () {
    let tmp = loop;
    while (tmp--) {
      quick_v2_sort(array_generator(10000));
    }
  })
  .add('sort#ryf_qsort', function () {
    let tmp = loop;
    while (tmp--) {
      // ugly;
      ryf_qsort(array_generator(10000));
    }
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