function noMemLeakArguments(args) {
  let len = args.length;
  const collector = [];
  while (len--) {
    collector.push(args[args.length - len - 1]);
  }
  return collector;
}


module.exports = noMemLeakArguments;
