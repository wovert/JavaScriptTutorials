var n = 2;
var obj = {
  n: 3,
  fn: (function(n) {
    n *= 2;
    var n = 5;
    return function(m) {
      this.n *= 2;
      console.log(m + ++n);
    };
  })(obj.n)
};

var fn = obj.fn;
fn(3);
obj.fn(3);
console.log(n, obj.n);
