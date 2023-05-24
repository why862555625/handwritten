let myTimer = new Symbol("myTimer");

function debounce(func, wait) {
  let timeout;
  return function () {
    let context = this; // 保存this指向
    let args = arguments; // 拿到event对象

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args)
    }, wait)
  }
}

function throttled(fn, wait) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  }
}