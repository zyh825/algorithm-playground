function clone(source) {
  let feedback = source;
  if (typeof target !== 'object') {
    return feedback;
  }
  if (Array.isArray(source)) {
    feedback = source.slice(0);    
  }
  return Object.assign({}, feedback);
}

