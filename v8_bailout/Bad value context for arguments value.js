"use strict";
const Benchmark = require('benchmark');
const array_generator = require('../utils/array_generator');

const array = array_generator(100);

const suite = new Benchmark.Suite;

const unoptimizedFunc = function() {
  return arguments;
};

const optimizedFunc = function() {
  var args = new Array(arguments.length);
  for (let i = 0, l = arguments.length; i < l; i++) {
    args[i] = arguments[i];
  }
  return args;
}

// const rs1 = unoptimizedFunc(array);
// const rs2 = optimizedFunc(array);
suite
  .add('unoptimizedFunc', function() {
    unoptimizedFunc(array, array, array, array, array)
  })
  .add('optimizedFunc', function() {
    optimizedFunc(array, array, array, array, array)
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target), 'average:', (event.target.times.cycle * 1000).toFixed(6) + 'ms');
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({
    'async': true
  });