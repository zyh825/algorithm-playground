const noMemLeakArguments = require('./noMemLeakArguments');

function curry(fn) {
  const arity = fn.length;
  return (function resolver() {
    const memory = noMemLeakArguments(arguments);
    return function () {
      const local = memory.slice();
      Array.prototype.push.apply(local, arguments);
      const next = local.length >= arity ? fn : resolver;
      return next.apply(null, local);
    };
  }());
}

module.exports = curry;