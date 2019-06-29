# 继承

## JS中继承的概念

> 通过【某种方式】让一个对象可以访问到另一个对象中的属性和方法，我们把这种方式称之为继承  `并不是所谓的xxx extends yyy`

## 为什么要使用继承

> 有些对象会有方法(动作、行为)，而这些方法都是函数，如果把这些方法和函数都放在构造函数中声明就会导致内存的浪费

```js
  function Person(){
      this.say=function(){
          console.log("你好")
      }
  }
  var p1=new Person();
  var p2=new Person();
  console.log(p1.say === p2.say);   //false
```

## 继承的第一种方式：原型链继承1

```js
Person.prototype.say=function(){
  console.log("你好")
}
```

缺点：添加1、2个方法无所谓，但是如果方法很多会导致过多的代码冗余

## 继承的第二种方式：原型链继承2

```js
Person.prototype={
  constructor:Person,
  say:function(){
    console.log("你好");
  },
  run:function(){
    console.log("正在进行百米冲刺");
  }
}
```

- 注意点：
- a、一般情况下，应该先改变原型对象，再创建对象
- b、一般情况下，对于新原型，会添加一个constructor属性，从而不破坏原有的原型对象的结构

### 继承的第三种方式：拷贝继承(混入继承)

- 场景：有时候想使用某个对象中的属性，但是又不能直接修改它，于是就可以创建一个该对象的拷贝
- 实现1：

```js
var source={name:"李白",age:15}
var target={};
target.name=source.name
target.age=source.age;
```

- 上面的方式很明显无法重用，实际代码编写过程中，很多时候都会使用拷贝继承的方式，所以为了重用，可以编写一个函数把他们封装起来：

```js
function extend(target,source){
  for(key in source){
    target[key]=source[key];
  }
  return target;
}
extend(target,source)
```

### 浅拷贝和深拷贝

- 浅拷贝只是拷贝一层属性，没有内部对象
- 深拷贝其实是利用了递归的原理，将对象的若干层属性拷贝出来

```js
var students=[
  {name:"",age:""},
  {name:"",age:""}
]
```

- 上面的方式很明显无法重用，实际代码编写过程中，很多时候都会使用拷贝继承的方式，所以为了重用，可以编写一个函数把他们封装起来：

```js
function extend(target,source){
  for(key in source){
    target[key]=source[key];
  }
  return target;
}
extend(target,source)
```

- 由于拷贝继承在实际开发中使用场景非常多，所以很多库都对此有了实现
  - `jquery：$.extend`

- es6中有了对象扩展运算符仿佛就是专门为了拷贝继承而生：

```js
  var source={name:"李白",age:15}
  var target={ ...source }
```

### 继承的第四种方式：原型式继承(道格拉斯在蝴蝶书中提出来的)

- 场景：
  - a、创建一个纯洁的对象：对象什么属性都没有
  - b、创建一个继承自某个父对象的子对象

```js
    var parent={ age:18,gender:"男"};
    var student=Object.create(parent);
    //student.__proto__===parent
```

- 使用方式：
  - 空对象：Object.create(null)
  
```js
    var o1={ say:function(){} }
    var o2=Object.create(o1);
```

### 继承的第五种方式：借用构造函数实现继承

- 场景：适用于2种构造函数之间逻辑有相似的情况
- 原理：函数的call、apply调用方式

```js
function Animal(name,age,gender){
  this.name=name;
  this.age=age;
  this.gender=gender;
}
function Person(name,age,gender,say){
  this.name=name;
  this.age=age;
  this.gender=gender;
  this.say=function(){
  }
}
```

- 局限性：Animal(父类构造函数)的代码必须完全适用于Person(子类构造函数)
- 以上代码用借用构造函数实现

```js
function Animal(name,age){
  this.name=name;
  this.age=age;
}
function Person(name,age,address){
  Animal.call(this,name);
  //this.name=name;
  //this.age=age;
  this.address=address;
}
```

- 寄生继承、寄生组合继承

## 原型链(家族族谱)

- 概念：JS里面的对象可能会有父对象，父对象还会有父对象，...祖先
- 根本：继承
  - 属性：对象中几乎都会有一个`__proto__`属性，指向他的父对象
      -意义：可以实现让该对象访问到父对象中相关属性
- 根对象：`Object.prototype`
  - `var arr=[1,3,5]`
  - `arr.__proto__：Array.prototype`
  - `arr.__proto__.__proto__` 找到了根对象

```js
function Animal(){}
var cat = new Animal();
//cat.__proto__：Animal.prototype
//cat.__proto__.__proto__: 根对象
```

- 错误的理解：万物继承自 `Object`

## 闭包

### 变量作用域

- 变量作用域的概念：就是一个变量可以使用的范围
- JS中首先有一个最外层的作用域：称之为全局作用域
- JS中还可以通过函数创建出一个独立的作用域，其中函数可以嵌套，所以作用域也可以嵌套

```js
var age=18;     //age是在全局作用域中声明的变量：全局变量

function f1(){
  console.log(name);      // 可以访问到name变量
  var name="周董" // name是f1函数内部声明的变量，所以name变量的作用域就是在f1函数内部
  console.log(name);      // 可以访问到name变量
  console.log(age);       // age是全局作用域中声明的，所以age也可以访问
}

console.log(age);       // 也可以访问
```

```js
// 多级作用域
// -->1级作用域
var gender="男";
function fn(){
  // 问题：
  // gender:可以访问
  // age:  可以访问
  // height:不能访问

  //-->2级作用域
  return function(){
      // 问题：
      // gender:   通过一级一级作用域的查找，发现gender是全局作用域中声明的变量
      // age:
      // height：
      console.log(gender);

      // -->3级作用域
      var height=180;
  }
  var age=5;
}
```

### 作用域链

- 由于作用域是相对于变量而言的，而如果存在多级作用域，这个变量又来自于哪里？这个问题就需要好好地探究一下了，我们把这个变量的查找过程称之为变量的作用域链
- 作用域链的意义：查找变量（确定变量来自于哪里，变量是否可以访问）
- 简单来说，作用域链可以用以下几句话来概括：(或者说：确定一个变量来自于哪个作用域)
  - 查看当前作用域，如果当前作用域声明了这个变量，就确定结果
    - 查找当前作用域的上级作用域，也就是当前函数的上级函数，看看上级函数中有没有声明
      - 再查找上级函数的上级函数，直到全局作用域为止
        - 如果全局作用域中也没有，我们就认为这个变量未声明(xxx is not defined)

- 举例1：

```js
var name="张三";
function f1(){
  var name="abc";
  console.log(name);
}
f1();
```

- 举例2：

```js
var name="张三";
function f1(){
  console.log(name);
  var name="abc";
}
f1();
```

- 举例3：

```js
var name="张三";
function f1(){
  console.log(name);
  var name="abc";
}
f1();
```

- 举例4：

```js
    var name="张三";
    function f1(){
        return function(){
            console.log(name);
        }
        var name="abc";
    }
    var fn=f1();
    fn();
```

- 举例5：

```js
    var name="张三";
    function f1(){
        return {
            say:function(){
                console.log(name);
                var name="abc";
            }
        }
    }
    var fn=f1();
```

### 闭包的问题

```js
    function fn(){
        var a=5;
        return function(){
            a++;
            console.log(a);
        }
    }
    var f1=fn();
    f1();
    f1();
    f1();
```

### 闭包问题的产生原因

- 函数执行完毕后，作用域中保留了最新的a变量的值

### 闭包的应用场景

- 模块化
- 防止变量被破坏

### 函数的4种调用方式

- 1、函数调用

```js
    var age=18;
    var p={
        age:15
        say:function(){
            console.log(this.age);
        }
    }
    var s1=p.say()
    s1();       //函数调用
```

- 2、方法调用

```js
    var age=18;
    var p={
        age:15
        say:function(){
            console.log(this.age);
        }
    }
    p.say()//方法调用
```

- 3、new调用(构造函数)

```js
    var age=18;
    var p={
        age:15
        say:function(){
            console.log(this.age);
        }
    }
    new p.say()//构造函数调用
```

- 4、上下文方式(call、apply、bind)

```js
    var length=21;
    function f1(){
        console.log(this.length);
    }
    f1.call([1,3,5])
    f1.apply(this)
    f1.call(5)
```

- 在ES6的箭头函数之前的时代，想要判断一个函数内部的this指向谁，就是根据上面的四种方式来决定的

### 原型

- 原型很多人开发用不到？
  - 很多人都用es6/7/8开发，确实用的比较少
  - 如果你用es5之前的版本开发代码(IE8、IE7。。。)，可能天天都要写原型
  - 理解了原型，才是理解了JS面向对象的核心
- 类继承其实本质上还是用原型继承来(包装)的
