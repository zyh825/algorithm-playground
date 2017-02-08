const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

suite
  .add('big#test', function () {
    44 > 25
  })
  .add('minus#test', function () {
    44 - 25
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