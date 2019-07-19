# OOP

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

```js
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

```js
var a = function(){
  alert('abc');
}
var b = new Function(){"alert('abc')"}

a = b; // false
```

this: 当前的方式属于谁

```js
function createPerson(name, gender) {
  // 系统内部工作流程
  // var this = new Object();
  this.name = name;
  this.gender = gender;

  this.getName = function() {
    return this.name;
  };

  this.getGender = function() {
    return this.gender;
  };
  // 系统内部工作流程
  // return this;
}

var p1 = new createPerson("blue", "male");
var p2 = new createPerson("blue", "male");
```

## JS 中继承的概念

> 通过【某种方式】让一个对象可以访问到另一个对象中的属性和方法，我们把这种方式称之为继承 `并不是所谓的xxx extends yyy`

### 为什么要使用继承

> 有些对象会有方法(动作、行为)，而这些方法都是函数，如果把这些方法和函数都放在构造函数中声明就会导致内存的浪费

```js
function Person() {
  this.say = function() {
    console.log("你好");
  };
}
var p1 = new Person();
var p2 = new Person();
console.log(p1.say === p2.say); //false
```

### 子类继承父类的属性和方法

1. 原型继承
2. call 继承
3. 寄生组合继承
4. ES6 中 class 类实现继承

#### 继承的第一种方式：原型链继承 1

```js
Person.prototype.say = function() {
  console.log("你好");
};
```

缺点：添加 1、2 个方法无所谓，但是如果方法很多会导致过多的代码冗余

## 继承的第二种方式：原型链继承 2

```js
Person.prototype = {
  constructor: Person,
  say: function() {
    console.log("你好");
  },
  run: function() {
    console.log("正在进行百米冲刺");
  }
};
```

- 注意点：
- a、一般情况下，应该先改变原型对象，再创建对象
- b、一般情况下，对于新原型，会添加一个 constructor 属性，从而不破坏原有的原型对象的结构

### 继承的第三种方式：拷贝继承(混入继承)

- 场景：有时候想使用某个对象中的属性，但是又不能直接修改它，于是就可以创建一个该对象的拷贝
- 实现 1：

```js
var source = { name: "李白", age: 15 };
var target = {};
target.name = source.name;
target.age = source.age;
```

- 上面的方式很明显无法重用，实际代码编写过程中，很多时候都会使用拷贝继承的方式，所以为了重用，可以编写一个函数把他们封装起来：

```js
function extend(target, source) {
  for (key in source) {
    target[key] = source[key];
  }
  return target;
}
extend(target, source);
```

### 浅拷贝和深拷贝

- 浅拷贝只是拷贝一层属性，没有内部对象
- 深拷贝其实是利用了递归的原理，将对象的若干层属性拷贝出来

```js
var students = [{ name: "", age: "" }, { name: "", age: "" }];
```

- 上面的方式很明显无法重用，实际代码编写过程中，很多时候都会使用拷贝继承的方式，所以为了重用，可以编写一个函数把他们封装起来：

```js
function extend(target, source) {
  for (key in source) {
    target[key] = source[key];
  }
  return target;
}
extend(target, source);
```

- 由于拷贝继承在实际开发中使用场景非常多，所以很多库都对此有了实现

  - `jquery：$.extend`

- es6 中有了对象扩展运算符仿佛就是专门为了拷贝继承而生：

```js
var source = { name: "李白", age: 15 };
var target = { ...source };
```

### 继承的第四种方式：原型式继承(道格拉斯在蝴蝶书中提出来的)

- 场景：
  - a、创建一个纯洁的对象：对象什么属性都没有
  - b、创建一个继承自某个父对象的子对象

```js
var parent = { age: 18, gender: "男" };
var student = Object.create(parent);
//student.__proto__===parent
```

- 使用方式：

  - 空对象：Object.create(null)

```js
var o1 = { say: function() {} };
var o2 = Object.create(o1);
```

### 继承的第五种方式：借用构造函数实现继承

- 场景：适用于 2 种构造函数之间逻辑有相似的情况
- 原理：函数的 call、apply 调用方式

```js
function Animal(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
function Person(name, age, gender, say) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.say = function() {};
}
```

- 局限性：Animal(父类构造函数)的代码必须完全适用于 Person(子类构造函数)
- 以上代码用借用构造函数实现

```js
function Animal(name, age) {
  this.name = name;
  this.age = age;
}
function Person(name, age, address) {
  Animal.call(this, name);
  //this.name=name;
  //this.age=age;
  this.address = address;
}
```

- 寄生继承、寄生组合继承

## 原型链(家族族谱)

- 概念：JS 里面的对象可能会有父对象，父对象还会有父对象，...祖先
- 根本：继承
  - 属性：对象中几乎都会有一个`__proto__`属性，指向他的父对象 -意义：可以实现让该对象访问到父对象中相关属性
- 根对象：`Object.prototype`
  - `var arr=[1,3,5]`
  - `arr.__proto__：Array.prototype`
  - `arr.__proto__.__proto__` 找到了根对象

```js
function Animal() {}
var cat = new Animal();
//cat.__proto__：Animal.prototype
//cat.__proto__.__proto__: 根对象
```

- 错误的理解：万物继承自 `Object`

### 原型

- 原型很多人开发用不到？
  - 很多人都用 es6/7/8 开发，确实用的比较少
  - 如果你用 es5 之前的版本开发代码(IE8、IE7。。。)，可能天天都要写原型
  - 理解了原型，才是理解了 JS 面向对象的核心
- 类继承其实本质上还是用原型继承来(包装)的

## 对象的属性查找规则

1. 首先查看本身有没有 length 属性
2. 如果本身没有该属性，那么去它的原型对象中查找
3. 如果原型对象中没有，那么就去原型对象的原型对象中查找，最终一直找到根对象（Object.prototype）
4. 最终都没有找到的话，我们认为该对象并没有该属性，如果获取该属性的值：undefined

## 补充，判断数据类型

- typeof
  - typeof 只能判断：数字、字符串、布尔值、undefined、函数
- `Object.prototype.toString.call()`
  - 5 '[object Number]'
  - "abc" '[object String]'
  - true '[object Boolean]'
  - null '[object Null]'
  - undefined '[object Undefined]'
  - [1,3,5] '[object Array]'
  - function(){} '[object Function]'
  - new Date() '[object Date]'
  - /abc/ '[object RegExp]'
- Array.isArray() es5 中提出来的检测数组
- isNaN()
- isInfinity()

## 指向 window

```js
$.ajax({
  success: function() {
    console.log(this); // window
  }
});
```

```js
[1, 3, 5].map(function() {
  console.log(this); // window
});
```

```js
$("div")`${$}``${$("div")}`;
```

## global 和 window 的区别

- global 是 es 中全局作用域中的根对象
  - 但是 nodejs 里面，global 全是表示全局变量的载体
  - 浏览器端的 js 里面，全局变量都放在了 window 中，浏览器中不存在 global 对象
