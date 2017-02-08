const array_generator = require('../utils/array_generator');
const Benchmark = require('benchmark');
const cloneArray = require('../utils/cloneArray');
const cloneArray_v2 = require('../utils/cloneArray_v2');

// test
let a = [1, 2, 3];
let b = cloneArray(a);
let c = cloneArray_v2(a);
console.log(a, b, c);
b[1] = 233;
c[2] = 666;
console.log(a, b, c);

// benchmark performance test
const test_array = array_generator(10000000);
const suite = new Benchmark.Suite;

suite
  .add('slice#test', function () {
    cloneArray(test_array);
  })
  .add('copy#test', function () {
    cloneArray_v2(test_array);
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