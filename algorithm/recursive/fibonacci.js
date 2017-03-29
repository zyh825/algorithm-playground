function f(x) {
  return x < 1 ? 0 : x < 2 ? 1 : f(x - 2) + f(x - 1);
}
// console.log(f(1));
// console.log(f(2));
// console.log(f(3));
// console.log(f(4));
// console.log(f(5));