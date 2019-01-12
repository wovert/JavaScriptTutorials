String.prototype.trim = function(){
  return this.replace(/^\s+|\s+$/g, '');
}

Array.prototype.has = function(v){
  var i = 0;
  var cnt = this.length;
  for(i=0; i<cnt; i++) {
    if(this[i] === v) {
      return true;
    }
  }
  return false;
}
Array.prototype.append = function(aAny) {
  var cnt = aAny.length;
  for(var i=0; len=cnt; i<len; i++) {
    this.push(aAny[i]);
  }
  return this;
}
Date.prototype.pattern = function(fmt) {
  var o = {
    "M+" : this.getMonth() + 1, // 月份
    "d+" : this.getDate(), // 日
    "h+" : this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, // 小时
    "H+" : this.getHours(), // 小时
    "m+" : this.getMinutes(), // 分
    "s+" : this.getSeconds(), // 秒
    "q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
    "S" : this.getMilliseconds() // 毫秒  
  };
  var week = {
    "0" : "\u65e5",
  };
}

/**
 * 
 * @param o element object
 * @return p object element position object  
 */
function getPos(o) {
  if(o.nodeType != 1) return false;
  var p = {left:0, top:0};
  while(o) {
    p.left += o.offsetLeft;
    p.top += o.offsetTop;
    if (debug != undefined && console.log) {
      console.log(o.tagName +' offset(left:'+o.offsetLeft+', top:'+o.offsetTop+')');
    }
    o = o.offsetParent;
  }
  return p;
}

function getElementsByClassName(className) {
  if (typeof className !== 'string') {
    return;
  }
  var a = document.getElementsByTagName('*');
  var arr = [];
  var cnt = a.length;
  var pat =  new RegExp('\\b'+className+'\\b');
  for (var i=0; i<a.length; i++) {
    if (pat.test(a[i].className)) {
      arr.push(a[i]);
    }
  }
  return arr;
}

function getStyle(obj, property) {
  if(obj.currentStyle) {
    return obj.currentStyle[property];
  } 
  return getComputedStyle(obj)[property];
  //return getComputedStyle(obj, null).getPropertyValue(property);
}

function setCookie(name, vlaue, iDay) {
  var oDate = new Date();
  oDate.setDate(oDate.getDate() + iDay);
  document.cookie = name + '=' + value + ';expires=' + oDate;
}

function getCookie(name) {
  var arr = document.cookie.split('; ');
  var cnt = arr.length;

  for (var i=0; i<cnt; i++) {
    var arr2 = arr[i].split('=');
    if(arr2[0] == name) {
      return arr2[1];
    }
  }
  return '';
}

function addClass(o, className) {
  if (o.clasName == '') {
    o.className = className;
  } else {
    var arrClassName = o.className.split(' ');
    var _i = arrIndexOf(arrClassName, className);
    if(_i == -1) {
      o.className += ' ' + className;
    }
  }
}

function removeClass(o, className) {
  if(o.className != '') {
    var arrClassName = o.className.split(' ');
    var _i = arrIndexOf(arrClassName, className);
    if (_i != -1) {
      arrClassName.splice(_i, 1);
      o.className = arrClassName.join(' ')
    }
  }
}

function arrIndexOf(arr, v) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i] == v) {
      return i;
    }
  }
  return -1;
}

function sprintf() {
  var _arg = arguments;

  return format.replace(/%\d+/g, function(str){
    return _arg[parseInt(str.substring(1))];
  });
}

/**
 * 视口的大小，部分移动设备浏览器对innerWidth的兼容性不好，需要
 * document.documentElement.clientWidth或者document.body.clientWidth
 * 来兼容（混杂模式下对document.documentElement.clientWidth不支持）。
 * 使用方法 ： getViewPort().width;
 */
function getViewPort () {
  if(document.compatMode == "BackCompat") {   //浏览器嗅探，混杂模式
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
  } else {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    };
  }
}

// 获得文档的大小（区别与视口）,与上面获取视口大小的方法如出一辙
function getDocumentPort () {
  if(document.compatMode == "BackCompat") {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight
    };
  } else {
    return {
      width: Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth),
      height: Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)
    }
  }
}