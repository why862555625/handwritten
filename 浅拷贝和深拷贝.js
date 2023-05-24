function shallowCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  let result = {};
  for (let key in obj) {
    result[key] = obj[key];
  }
  return result;
}



/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */

function deepClone(obj = {}, map = new Map()) {
  if (obj === null) return obj // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== 'object') return obj
  if (map.get(obj)) {
    return map.get(obj);
  }
  let result = {}; // 初始化返回结果
  if (
    obj instanceof Array ||
    // 加 || 的原因是为了防止 Array 的 prototype 被重写，Array.isArray 也是如此
    Object.prototype.toString(obj) === "[object Array]"
  ) {
    result = [];
  }
  // 防止循环引用
  map.set(obj, result);
  for (const key in obj) {
    // 保证 key 不是原型属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key], map);
    }
  }
  return result;
}

var a = { };
a.f = a
let c =  deepClone(a);
console.log(`🚀 ============================ file: 浅拷贝和深拷贝.js:37 ============================ c :==========================`, c );
