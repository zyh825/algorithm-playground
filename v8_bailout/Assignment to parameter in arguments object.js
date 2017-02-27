"use strict";
const Benchmark = require('benchmark');
const array_generator = require('../utils/array_generator');

const array = array_generator(100000);

const suite = new Benchmark.Suite;

const unoptimizedFunc = item => {
  item = {
    a: 0
  };
  return item;
};

const optimizedFunc = item => {
  let _copy = item;
  _copy = {
    a: 0
  };
  return _copy;
}

suite
  .add('unoptimizedFunc', function() {
    array.map(unoptimizedFunc)
  })
  .add('optimizedFunc', function() {
    array.map(optimizedFunc)
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