# JavaScript 面向对象

## 什么是面向对象

- 什么是对象
  - 对象是一个整体，对外提供的一些操作

- 什么事面向对象
  - 使用对象时，只关注对象提供的功能，不关注期内部细节
  - 比如 jQuery

- 面向对象是一种通用思想，并非只有编程中能用，任何事情都可以用，任何事情都可以用

## 面向对象编程（OOP）的特点

- 抽象：抓住核心问题
- 封装：不考虑内部实现，值考虑功能使用
- 继承：从已有的对象上，继承出新的对象
  - 多种继承
  - 多态

- 对象的组成
  - 方法-函数：过程、动态的
  - 属性-变量：状态、静态的

## 第一个面向对象程序

- 为对象添加方法和属性
  - this 详解，事件处理中 this 的本质
    - window
    - this - 函数属于谁
- 不能在系统对象中随意附加方法、属性、否则会覆盖已有的方法、属性
- object 对象

``` js
var arr = [12,65, 89];

arr.show = function(){
  alert(this); // this指向的arr对象的应用
}

oDiv.onclick = function(){
  console.log(this); // this 指向的是 oDiv 对象
}

function show() {
  return this; // 指向的 window 对象
}
window.show = function {
  return this; // 指向的 window 对象
}

show();
window.show();


// 创建空白对象
var obj = {}; // {} 等同于 new Object()
obj.name = "Alice";
obj.gender = 'male';
obj.getName = function() {
  return this.name;
}
obj.getGender = function(){
  return this.gender;
};


// 创建人类构造函数： 工厂方式构造对象
// 工厂：原料 -> 加工 -> 出厂
function createPerosn(name, gender) {
  // 原料
  var obj = {};

  // 加工
  obj.name = name;
  obj.gender = gender;

  obj.getName = function() {
    return this.name;
  }

  obj.getGender = function() {
    return this.gender;  
  }
  
  // 出厂
  return obj;
}

var p1 = createPerson('blue', 'male');
var p2 = createPerson('blue', 'male');

工厂方式的问题：
1. 没有 new
2. 每个对象都有一套自己的函数——浪费资源

```

函数、构造函数、方法、事件处理函数

``` js
var a = function(){
  alert('abc');
}
var b = new Function(){"alert('abc')"}

a = b; // false
```

this: 当前的方式属于谁

``` js
function createPerson(name, gender) {
  // 系统内部工作流程
  // var this = new Object();
  this.name = name;
  this.gender = gender;

  this.getName = function() {
    return this.name;
  }

  this.getGender = function() {
    return this.gender;  
  }
  // 系统内部工作流程
  // return this;
}

var p1 = new createPerson('blue', 'male');
var p2 = new createPerson('blue', 'male');
```

## 面向对象选项卡

``` js


```