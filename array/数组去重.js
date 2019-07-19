// 1. 对象键值对处理（推荐）

Array.prototype.unique = function() {
  // this:arr
  // clone array
  let _this = this.slice();
  // let _this = [...this];
  const data = [];
  const obj = {};

  for (let i = 0; i < this.length; i++) {
    let item = _this[i];

    // 当前迭代的这项在数组中已经存在
    if (typeof obj[item] !== "undefined") {
      continue;
    }
    obj[item] = _this[i];
    data.push(_this[i]);
  }
  return data;
};

let arr = [1, 2, 3, 3, 4, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let uniqueArr = arr.unique();

console.log(uniqueArr);
