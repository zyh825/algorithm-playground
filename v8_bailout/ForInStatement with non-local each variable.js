"use strict";
const Benchmark = require('benchmark');
const keyBy = require('lodash/keyBy');
const array_generator = require('../utils/array_generator');

const array = array_generator(100000);
const test_obj = keyBy(array);

const suite = new Benchmark.Suite;

const unoptimizedFunc = function(obj) {
  const result = [];
  for (let key in obj) {
    result.push(key);
  }
  return result;
};

const optimizedFunc = function(obj) {
  return Object.keys(obj);
};

suite
  .add('unoptimizedFunc', function() {
    unoptimizedFunc(test_obj);
  })
  .add('optimizedFunc', function() {
    optimizedFunc(test_obj);
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