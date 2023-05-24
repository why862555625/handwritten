function myNew(Cobj){
  let obj = {}
  obj.__proto__ = Cobj.prototype;
  res = Cobj([...arguments].slice(1));
  return typeof res == "object" ? obj : res;
}

