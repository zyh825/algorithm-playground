function fishYatesShuffle(array) {
  const copy = array.slice(0);
  let len = copy.length;
  while (len) {
    const pos = Math.floor(Math.random() * (len -= 1));
    copy[len] = [copy[pos], copy[pos] = copy[len]][0];
  }
  return copy;
}

// unit test
console.log(fishYatesShuffle([1, 2, 3, 4, 5, 6, 7, 8]));
