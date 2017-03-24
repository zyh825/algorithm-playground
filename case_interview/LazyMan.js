function LazyManProto(name) {
  const self = this;
  this.taskList = [];
  this.name = name;
  this.taskList.push(function () {
    console.log('Hi! This is ' + self.name);
  });
  setTimeout(function () {
    while (self.taskList.length > 0) {
      const task = self.taskList.shift();
      task();
    }
  }, 0);
  return self;
}

LazyManProto.prototype.sleepFirst = function (s) {
  this.taskList.unshift(function () {
    const end = Date.now() + 1000 * s
    while (Date.now() < end);
    console.log('Wake up after ' + s);
  })
  return this;
}

LazyManProto.prototype.sleep = function (s) {
  this.taskList.push(function () {
    const end = Date.now() + 1000 * s
    while (Date.now() < end);
    console.log('Wake up after ' + s);
  });
  return this;
}

LazyManProto.prototype.eat = function (food) {
  this.taskList.push(function () {
    console.log('Eat ' + food + '~');
  });
  return this;
}

function LazyMan(name) {
  return new LazyManProto(name);
}

LazyMan('Hank').sleep(10).eat('dinner').eat('supper').sleepFirst(5);