Function.prototype.Mycall = function (context) {
  if (typeof this != "function") {
    throw "type error";
  }
  let args = [...arguments].slice(1);
  let key = new Symbol("fn");
  context = context || globalThis;
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.Myapply = function (context, args) {
  if (typeof this != "function") {
    throw "type error";
  }
  if (Object.prototype.toString.call(args) !== "[object Array]") {
    throw new TypeError("参数错误");
  }
  let key = new Symbol("fn");
  context = context || globalThis;
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};

Function.prototype.myBind = function (context) {
  if (typeof this !== "function") throw new TypeError("调用必须是函数");
  let args = [...arguments].slice(1);
  context = context || globalThis;
  let fn = this;
  return function () {
    let key = new Symbol("fn");
    context[key] = fn;
    let result = context[key](args.concat(...arguments));
    delete context[key];
    return result;
  };
};
