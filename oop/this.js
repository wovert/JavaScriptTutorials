var point = {
  x: 10,
  y: 20,
  moveTo: function(x, y) {
    // this = point
    var moveX = function(x) {
      // this = point
      this.x = x;
    };
    var moveY = function(y) {
      // this = point
      this.y = y;
    };
    // moveX(x);
    // moveY(y);
    moveX.call(this, x);
    moveY.call(this, y);
  }
};

point.moveTo(100, 200);
console.log(point.x, point.y); // 100, 200
// console.log(window.x, window.y); // 100, 200
