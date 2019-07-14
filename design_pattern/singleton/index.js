var name = "wovert";
var age = 18;
var gender = "girl";

var name = "lingyima";
var age = 81;
var gender = "boy";

var person1 = {
  name: "wovert",
  age: 18
};

var person2 = {
  name: "lingyima",
  age: 81
};

/**
 * 单利模式
 */
var xiaowang = (function(argument) {
  var xiaowangjia = function(message) {
    this.menling = message;
  };
  var men;
  var info = {
    sendMessage: function(message) {
      if (!men) {
        men = new xiaowangjia(message);
      }
      return men;
    }
  };
  return info;
})();

// 常驻单利
var xiaoli = {
  callXiaowang: function(msg) {
    var _xw = xiaowang.sendMessage(msg);
    console.log(_xw.menling);
    _wx = null; // 等待垃圾回收
  }
};
xiaoli.callXiaowang("滴滴");

/************************/

// 页面6个按钮 a b c d e f
// a b c => top
// d e f => banner

var top = {
  init: function() {
    this.render();
    this.bind();
  },
  a: 4,
  render: function() {
    var me = this;
    me.btna = document.getElementById("a");
  },
  bind: function() {
    var me = this;
    me.btna.click(function() {
      // 业务逻辑取出去
      me.test();
    });
  },
  test: function() {
    a = 5;
  }
};
var banner = {
  init: function() {
    this.render();
    this.bind();
  },
  a: 4,
  render: function() {
    var me = this;
    me.btna = document.getElementById("d");
  },
  bind: function() {
    var me = this;
    me.btna.click(function() {
      // 业务逻辑取出去
      me.test();
    });
  },
  test: function() {
    a = 5;
    top.a = 6;
  }
};

top.init();
banner.init();

// $('#a').click(function(){
//   var a = 4;
// });

// $('#b').click(function(){
//   var a = 4;
// });

// $('#c').click(function(){
//   var a = 4;
// });

// $('#d').click(function(){
//   var a = 4;
// });

// $('#e').click(function(){
//   var a = 4;
// });

// $('#f').click(function(){
//   var a = 4;
// });
