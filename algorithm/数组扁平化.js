// 多维数组 => 一维数组

let arr = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(arr);

let str1 = str.replace(/(\[|\])/g, "").split(",");
console.log(str1);

let result = [];
let fn = function(arr) {
  if (arr.length === 0) return;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (typeof item === "object") {
      fn(item);
    } else {
      result.push(item);
    }
  }
};
fn(arr);
console.log(result);
