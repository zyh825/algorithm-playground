function cloneArray_v2(source) {
  const clone = [];
  for (let i = 0; i < source.length; i++) {
    clone[i] = source[i];
  }
  return clone;
}

module.exports = cloneArray_v2;
