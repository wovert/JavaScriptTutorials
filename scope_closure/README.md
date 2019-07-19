## 闭包

### 变量作用域

- 变量作用域的概念：就是一个变量可以使用的范围
- JS 中首先有一个最外层的作用域：称之为全局作用域
- JS 中还可以通过函数创建出一个独立的作用域，其中函数可以嵌套，所以作用域也可以嵌套

```js
var age = 18; //age是在全局作用域中声明的变量：全局变量

function f1() {
  console.log(name); // 可以访问到name变量
  var name = "周董"; // name是f1函数内部声明的变量，所以name变量的作用域就是在f1函数内部
  console.log(name); // 可以访问到name变量
  console.log(age); // age是全局作用域中声明的，所以age也可以访问
}

console.log(age); // 也可以访问
```

```js
// 多级作用域
// -->1级作用域
var gender = "男";
function fn() {
  // 问题：
  // gender:可以访问
  // age:  可以访问
  // height:不能访问

  //-->2级作用域
  return function() {
    // 问题：
    // gender:   通过一级一级作用域的查找，发现gender是全局作用域中声明的变量
    // age:
    // height：
    console.log(gender);

    // -->3级作用域
    var height = 180;
  };
  var age = 5;
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

- 举例 1：

```js
var name = "张三";
function f1() {
  var name = "abc";
  console.log(name);
}
f1();
```

- 举例 2：

```js
var name = "张三";
function f1() {
  console.log(name);
  var name = "abc";
}
f1();
```

- 举例 3：

```js
var name = "张三";
function f1() {
  console.log(name);
  var name = "abc";
}
f1();
```

- 举例 4：

```js
var name = "张三";
function f1() {
  return function() {
    console.log(name);
  };
  var name = "abc";
}
var fn = f1();
fn();
```

- 举例 5：

```js
var name = "张三";
function f1() {
  return {
    say: function() {
      console.log(name);
      var name = "abc";
    }
  };
}
var fn = f1();
```

### 闭包的问题

```js
function fn() {
  var a = 5;
  return function() {
    a++;
    console.log(a);
  };
}
var f1 = fn();
f1();
f1();
f1();
```

### 闭包问题的产生原因

- 函数执行完毕后，作用域中保留了最新的 a 变量的值

### 闭包的应用场景

- 模块化
- 防止变量被破坏

### 函数的 4 种调用方式

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

- 3、new 调用(构造函数)

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
var length = 21;
function f1() {
  console.log(this.length);
}
f1.call([1, 3, 5]);
f1.apply(this);
f1.call(5);
```

- 在 ES6 的箭头函数之前的时代，想要判断一个函数内部的 this 指向谁，就是根据上面的四种方式来决定的
