// var a = 12;
// function fn() {
//   // arguments对象：实参集合
//   // arguments.callee: 函数本身fn
//   // arguments.callee.caller: 当前在哪执行的，caller就是谁（记录的是它执行的宿主环境），在全局下执行caller的结果是null
//   console.log(a);
//   console.log(arguments);
//   console.log(arguments.callee);
//   console.log(arguments.callee.caller);
// }
// fn(); // 12

// function sum() {
//   var a = 120;
//   fn(); // 12
// }
// sum()

console.log('=======================')

var n = 10;
function fn() {
  var n = 20;
  function f() {
    n++;
    console.log(n);
  }
  f();
  return f;
}
var x = fn(); // 21
x(); // 22
x(); // 23
console.log(n); // 10