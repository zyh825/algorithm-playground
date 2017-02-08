function array_generator(len, min = 0, max) {
  const array = new Array(len);
  max = max || len;
  for (let i = 0; i < len; i++) {
    const seed = Math.random() * max + min;
    array[i] = parseInt(seed, 10);
  }
  return array;
}

module.exports = array_generator;
