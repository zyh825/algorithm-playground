"use strict";
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

function unoptimizedFunc() {
  const tmp = {};
  tmp.x = 0;
  tmp.y = 1;
  tmp.z = 2;
  return tmp;
}

function optimizedFunc() {
  return {
    a: 0,
    b: 1,
    c: 2
  };
}

suite
  .add('unoptimizedFunc', function() {
    unoptimizedFunc()
  })
  .add('optimizedFunc', function() {
    optimizedFunc()
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