# 对象

## 创建一个对象

```js
var student={ 
  name:"李白" , //student有一个name属性，值为"李白"
  grade:"初一" ,
  //a、student有一个say属性，值为一个函数
  //b、student有一个say方法
  say:function(){
    console.log("你好");
  },
  run:function(speed){
    console.log("正在以"+speed+"米/秒的速度奔跑");
  }
}
```

## 对象是键值对的集合

> 对象是由属性和方法构成的 (ps：也有说法为：对象里面皆属性，认为方法也是一个属性)

- name/grade 是属性
- say/run 是方法

## 对象属性操作

### 获取属性

#### 第一种方式：.语法

- student.name      获取到name属性的值，为："李白"
- student.say       获取到一个函数

#### 第二种方式：[]语法

- student["name"]   等价于student.name
- student["say"]    等价于student.say

#### 号外：2种方式的差异

- `.`语法更方便，但是坑比较多(有局限性)，比如：
  - `.`后面不能使用js中的关键字、保留字(`class、this、function...`)
  - `.`后面不能使用数字

```js
var obj={};
obj.this=5; //语法错误
obj.0=10;   //语法错误
```

- `[]`使用更广泛
  - o1[变量name]
  - ["class"]、["this"]都可以随意使用 `obj["this"]=10`
  - [0]、[1]、[2]也可以使用
    - `obj[3]=50 = obj["3"]=50`
    - 思考：为什么 `obj[3]=obj["3"]`
  - 甚至还可以这样用：`["[object Array]"]`
    - jQuery 里面就有这样的实现
  - 也可以这样用：`["{abc}"]`
    - 给对象添加了`{abc}`属性

### 设置属性

- `student["gender"]="男"` 等价于 `student.gender="男"`
  - 含义：如果student对象中没有gender属性，就添加一个gender属性，值为"男"
  - 如果student对象中有gender属性，就修改gender属性的值为"男"
- 案例1：`student.isFemale=true`
- 案例2：`student["children"]=[1,2,5]`
- 案例3：

```js
student.toShanghai = function() {
  console.log("正在去往上海的路上")
}
```

### 删除属性

- `delete student["gender"]`
- `delete student.gender`

## 通过构造函数创建对象

### 构造函数创建对象的例子

- `var xiaoming = new Object()` --> `var xiaoming = {};`  
- `var now = new Date()`
- `var rooms = new Array(1,3,5)` --> `var rooms = [1,3,5]`
- `var isMale=/123/;` --> `var isMale=new RegExp("123")`
  - isMale 是通过 RegExp 构造函数创建出来的对象
  - isMale 是 RegExp 构造函数的实例
- 以上例子中，`Object、Date、Array`都是内置的构造函数

## 自定义一个构造函数来创建对象

- 构造函数

```js
function Person(name,age){
  this.name=name;
  this.age=age;
}
var p1=new Person("赵云",18)
```

- 说明：`p1就是根据【Person构造函数】创建出来的对象`

### 构造函数的概念

- 任何函数都可以当成构造函数
    `function CreateFunc(){ }`
- 只要把一个函数通过new的方式来进行调用，我们就把这一次函数的调用方式称之为：构造函数的调用
  - new CreateFunc(); 此时CreateFunc就是一个构造函数
  - CreateFunc();     此时的CreateFunc并不是构造函数

### 关于new Object()

- new Object()等同于对象字面量{}

### 构造函数的执行过程

`var p1=new Person();`

- 1、创建一个对象 (我们把这个对象称之为Person构造函数的实例)- `_p1 `
- 2、创建一个内部对象，`this`，将this指向该实例(_p1)
- 3、执行函数内部的代码，其中，操作this的部分就是操作了该实例(_p1)
- 4、返回值：
  - a、如果函数没有返回值(没有return语句)，那么就会返回构造函数的实例(p1)
  - b、如果函数返回了一个基本数据类型的值，那么本次构造函数的返回值是该实例(_p1)

```js
  function fn(){
  }
  var f1=new fn();    //f1就是fn的实例

  function fn2(){
    return "abc";
  }
  var f2=new fn2();   //f2是fn2构造函数的实例
```

  - c、如果函数返回了一个复杂数据类型的值，那么本次函数的返回值就是该值

```js
function fn3(){
  return [1,3,5];
  // 数组是一个对象类型的值，
  // 所以数组是一个复杂数据类型的值
  // -->本次构造函数的真正返回值就是该数组
  // -->不再是fn3构造函数的实例
}
var f3=new fn3();   //f3还是fn3的实例吗？错 f3值为[1,3,5]
```
