const array_generator = require('../utils/array_generator');
const Benchmark = require('benchmark');
var test_array = array_generator(10);
var sample_array = array_generator(100000);

function uniq4(arr) {
  const result = [];
  arr.forEach((v, i) => {
    if (result.indexOf(v) < 0) {
      result.push(v);
    }
  });
  return result;
}

function uniq5() {
  const result = [];
  arr.forEach()
}

function uniq1(arr) {
  const map = new Map();
  const result = [];
  arr.forEach(v => {
    if (!map.get(v)) {
      result.push(v);
      map.set(v, true);
    }
  });
  return result;
}

function uniq2(arr) {
  return Array.from(new Set(arr));
}

function uniq3(arr) {
  const map = {};
  const result = [];
  arr.forEach(v => {
    if (!map[v]) {
      result.push(v);
      map[v] = true;
    }
  });
  return result;
}

console.log(uniq4(test_array));
console.log(uniq3(test_array));
console.log(uniq2(test_array));
console.log(uniq1(test_array));

const suite = new Benchmark.Suite;
suite
  .add('indexOf', function () {
    uniq4(sample_array);
  })
  .add('NORMAL', function () {
    uniq3(sample_array);
  })
  .add('MAP', function () {
    uniq1(sample_array);
  })
  .add('SET', function () {
    uniq2(sample_array);
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

