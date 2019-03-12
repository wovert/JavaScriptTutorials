var i = 1;
function fn(i) {
  return function (n) {
    console.log(n+ (++i))
  }
}
var f = fn(2)
f(10) // 13, i=3
fn(5)(6) // 12, i=6
fn(7)(8) // 16, i=8
f(11) // 15, i=4