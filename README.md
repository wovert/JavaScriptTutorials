# JavaScript

## Frontend History

- 1.从 C/S 到 B/S (网页制作) (HTML/CSS)；技术栈：photoshop, HTML, CSS
- 2.从静态到动态，从后端到前段 (js/jQuery/Ajax)
  - 前段端分离
    - 后台：完成数据的分析和业务逻辑编写（包含 API 接口编写）
    - 前段：网页制作，JS 交互效果，数据的交互和绑定
  - 技术栈：JavaScript, Ajax, jQuery ...
- 3.从前段到全端(从 PC 端到移动端) (Hybrid/小程序)
  - 技术栈：H5, CSS3, 响应式布局开发, zepto, Hybrid(混合 APP 开发), 微信小程序
- 4.从全端到全栈 (React/Vue/Webpack/Node)
  - 全栈开发：一种语言前后端都可以开发
  - 技术栈：Node(基于 JS 编程语言开发服务端)， **Express/Koa**
  - 高性能框架：**Vue、React、Angular、webpack**
- 5.web4.0 **VR/AR**元年，需要 **Canvas/WebGL**

未来软件工程师：**端工程师(业务逻辑工程师)/云工程师(数据工程师)**

## IDE

> Integrated Development Enviroment 集成开发环境

1. dreamweaver/firefox/photoshop/flash
2. sublime text
3. HBuilder
4. webstorm
5. atom
6. vim
7. Visual Studio Code

## About JavaScript

### Where(Run JavaScript)

- Browser Kernel
- Server NodeJS

### browser kernel

1. **Webkit** kernel(V8 引擎) chrome/safari/opera/大部分国产和手机浏览器
2. **Gecko** kernel (Mozilla Firefox)
3. **Presto** kernel
4. **Trident** 排版引擎 (Internet Explorer)
5. **KHTML** 排版引擎

- 大部分网站都已放弃 IE8 以及更低版本浏览器（例如：淘宝）
- W3C: 万维网联盟，制定编程语言的规范和标准
- 开发者按照规范编写代码，浏览器开发商也会开发一套按照规范吧代码渲染成页面的东西（内核或者引擎）

- 浏览器内核作用：按照规范，把代码基于 GPU（显卡）绘制出对应的图像和页面

### 为什么出现浏览器兼容

1. 部分浏览器提前开发一些**更好体验的功能**，后期这些功能会**被收录到 W3C 规范**中，但是在**收录之前**，会存在一定的**兼容性**。

- `-webkit-border-radius`
- `-moz-border-radius`
- `-ms-border-radius`
- `-o-border-radius`
- `border-radius`

2. 各个浏览器厂商，突出自己产品独特性，用其他方法实现了 W3C 规范中的功能

- `getComputedStyle`
- `currentStyle`

[马克飞象](https://maxiang.io/)

## JavaScript Structure

- **ECMAScript(语法规范)** 描述语言的**语法**和对象
- **DOM(文档对象模型)** 描述网页**内容的方法和接口**
- **BOM(浏览器对象模型)** 描述**与浏览器**进行**交互的方法和接口**

- 【标记语言】：html/css, xml
- 【脚本语言】：javascript/python/php
- 【编程语言】：java/go

- 推荐阅读书籍：
  - 《JavaScript 权威指南》
  - 《JavaScript 高级程序设计》
  - 《你所不知道的 JavaScript》
  - 《ES6 标准入门》

### ECMAScript

- es1.0 - es3.1
- es5
- es6(es2015)
- es7(es2016)
- es8(es2017)

## script 标签属性

- defer
- async

## Variable

> 存储值的容器或者代名词，因为它存储的值可以改变，所以称为变量

### ES 语言规范 —— 创建变量

- `var` (ES3)
- `function` (ES3) 创建函数（函数名是变量，只不过存储的值是函数类型）
- `let` (ES6) 创建声明局部变量
- `const` (ES6) 创建常量
- `import` (ES6) 模块规范导出信息
- `class` (ES6) 创建类

```js
var [变量名] = 值;
let [变量名] = 值;
const [常量名] = 值;
function 函数名 () {
  函数体...
}

const PI = 3.14
PI = 3.1415
Uncaught TypeError: Assignment to constant variable. 未捕获的错误类型: 赋值给常量
```

### 变量命名规范

- 严格区分大小写
- 遵循驼峰命名法
- 数字、字母、下划线和美元符号(\$)命名
- 数字不能作为开头
- 命名语义化
- 不能使用关键字和保留字

- 常用规范
  - `_num` 内部或私有变量
  - `$obj` DOM 对象变量
  - add / create / insert
  - del (delete) / update / remove (rm)
  - info / detail
  - log

## Data Type

### Date Type

- 【基本数据类型】- 值类型
  - 数字 `Number`
  - 布尔 `Bool`
  - 字符串 `String`
  - 空引用 `null`
  - 未定义 `undefined`
- 【复杂数据类型】- 引用数据类型
  - object
    - 普通对象
    - 数组对象
    - 正则对象
    - 日期对象
  - 函数 function
- `Symbol`(ES6) 唯一的值

`NaN` (Not a number) 不是一个有效的数字，但是属于 number 类型

```js
var a = Symbol("唯一");
var b = Symbol("唯一");
a == b; // false
a; // Symbol(唯一)
b; // Symbol(唯一)
```

判断数据类型 {undefined|number|string|boolen|object(包括 null, array, object, function, dom)} `String typeof VARIABLE`

### Number

#### NaN: not a number 但是它是数字类型的

isNaN(v) 检测当前值是否不是有效数字，返回 true 代表不是有效数字，返回 false 时有效数字

```js
语法：boolean isNaN([value]);
var num = 12;
isNaN(num); // false
isNaN('13'); // false
isNaN('wovert'); // true
isNaN(true); // false
isNaN(false); // false
isNaN(null); // false
isNaN(undefined); // true
isNaN({xx:9}); // true
isNaN([12,33]); // true
isNaN([12]); // false
isNaN(/^$/); // true
isNaN(function(){}); // true

重要：isNaN检测的机制

1. 首先验证当前要检测的值是否为数字类型的，如果不是，浏览器会默认的把值转换为数字类型

非数字类型的值转换为数字

  其他基本类型转换为数字： 直接使用Number这个方法转换的

    [字符串转数字]
      Number('88') => 13
      Number('13px') => NaN 如果当前字符串中出现任意一个非有效数字字符，结果则为 NaN
      Number('13.5') => 13.5 可以识别小数
      Number('13.5.0) => NaN

    [布尔转数字]
      Number(true) => 1
      Number(false) => 0

    [其他]
      Number(null) => 0
      Number(undefined) => NaN


  引用数据类型转换为数字： 先把引用值调取toString转为字符串，然后再把字符串调取Number转换为数字

    [对象]
      ({}).toString() => '[object Object]' => NaN

    [数组]
      [12,23].toString() => '12,23' => NaN
      [12].toString() => '12' => 12

    [正则]
      /^$/.toString() => '/^$/' => NaN

  Number('') => 0
  [].toString() => '' => false


2. 当前检测的值已经是数字类型，是有效数字返回false, 不是返回true (数字类型中只有NaN不是有效数字，其余都是有效数字)

```

#### parseInt/parseFloat

> 等同于 Number, 其他类型的值转换为数字类型
> 和 Number 的区别在于字符串分析上
> Number: 出现任意非有效数字字符，结果就是 NaN
>
> parseInt(): 把一个字符串中的前缀整数部分解析出来，parseFloat() 是一个字符串中的前缀浮点数部分解析出来

```js
parseInt('13.5px') => 13
parseFloat('13.5px') => 13.5

parseInt('width:30px') => NaN 从字符串最左边开始查找有效数字字符，并且转换为数字，但是一旦遇到一个非有效数字字符，查找结束
```

#### NaN 的比较

```js
NaN == NaN => false NaN和谁都不相等，包括自己
```

思考题：有一个变量 num, 存储的值不知道，检测它是否为一个有效数字

```js
if (Number(num) == NaN) {
  console.log('num不是有效数字')
}

NaN和谁都不相等，条件永远不成立（即时num确实不是有效数字，转换的结果确实是NaN， 但是NaN!=NaN的）


解决方案：
if (isNaN(Number(num)) {
  console.log('num不是有效数字')
}
```

### Sting

- 属性
  - Integer `str.length`: 返回字符串长度
- 方法
  - Char `str.charAt(3)`: 返回索引所在位置的字符

### 数据类型转换

```js
Number(a) 返回数值或 NaN

任何涉及NaN的操作（例如NaN/10）都会返回NaN

NaN与任何值都不相等，包括NaN本身

parseInt(a)
parseFloat(a)
isNaN(a) : is not a number
```

### JS 如何被运行

- 在浏览器内核渲染解析
- 基于 Node 环境运行（V8 引擎渲染和解析 JS）

### 调试技巧

- `console.log()` 输出日志
- `console.dir()` 比 log 输出的更加详细一些
- `console.table()` json 数据按照表格的方式输出

## scope

- 作用域
- 域：空间、范围、区域

### JS 解释器

1. 查找 var 和 function 参数，遇到重名的只留下最后一个 - JS 的预解析
2. 逐行解读代码 - 表达式

### boolean

> boolean={true,false}

其他数据类型转换为 boolean

```js
Boolean()
!
!!
```

```js
!0 => true
!'' => true
Boolean(1) => true
!'沃尔特' => false 先把其他数据类型转换为布尔类型，然后取反

!![] => true
!!{} => true

!!null => false
!!undefiend => false
!!'' => false
!!0 => false
!!NaN => false
```

总结：在 JS 中只有`0、NaN、空字符串、null、undefined`这个五个值转换为布尔类型的`false`, 其余都转换为`true`

### null && undefined

> 都代表空或者没有

- `null`: 空对象指针；一般都是意料之中的没有(先手动设置为 null, 后面再次给它其他值)

```js
var num = null; // => null 手动赋值
num = 88;
```

### Object 对象数据类型

> 普通对象
> 由大括号包裹起来的
> 由零到多组属性名和属性值（键值对）组成

- 属性：描述当前对象的特征
- 属性名：当前具备这个特征
- 属性值：对这个特征的描述

属性名称为键`[key]`，属性值称为值`[value]`，一组属性名和属性值称为一组键值对儿

```js
var obj = {
  name: 'wovert',
  age: 1
};

对象的操作：CRUD

[READ]
语法：对象.属性 / 对象[属性]

obj.name
obj['name'] 或 obj["name"] 一般来说，对象的属性名都是字符串格式的（属性值不固定，任何格式都可以）


[CREATE/UPDATE]
JS对象中属性是不允许重复的，是唯一的

var obj1 = {name: 'one object'};
var obj2 = {name: 'two object'};
obj1.age = 10; // 原有对象中不存在age, 此处相当于当前对象新增加一个属性 age
obj2['age'] = 20

[DELETE]
彻底删除：对象中不存在这个属性
delete obj['age'];

假删除：没有移除这个属性，只是让当前属性的值为空
obj.sex = null;
```

获取属性值的时候，如果当前对象有这个属性名，则可以正常获取到值(也有可能是 `null` 值)，但是如果没有这个属性名，则获取的结果是 `undefined`

```js
obj["color"]; // undefined
```

一个对象中的属性名不仅仅是字符串格式的，还有可能是数字格式的。其他格式的会先转换成字符串，然后存储。

```js
var obj = {
  name: 'wovert',
  0: 12
}
obj[0] => 12
obj['0'] => 12
ojb.0 => Uncaught SyntaxError: Unexpected number

SyntaxError: 语法错误

obj[true] = 1 => obj['true']
obj[null] = 2 => obj['null']
obj[undefined] = 3 => obj['undefined']
obj[[]] = 4 => obj[[].toString()] => obj['']
obj[{}] = 5 => obj[{}.toString()] => obj['[object Object]']
obj[function(){}] = 'function property' => obj[(function(){}).toString()] => obj['function(){}']
```

当存储的属性名不是**字符串**也不是**数字**的时候，浏览器会把这个值转换为字符串(`to String()`)，然后再进行存储

### 数组对象（对象由键值对组成的）

```js
var oo = {
  a: 12
}
var arr = [1, 2]; // 12和23都是属性值，属性名呢？

arr[0] => 1
arr['1'] => 2
arr.0 => Uncaght SyntaxError: Unexpected number

数组对象的属性是数字（属性名称称为当前对象的索引）

arr.length => 2
arr['length'] => 2

arr['age'] = 100
arr['age'] => 100
```

### JS 运行机制

1. 浏览器内核引擎徐然和解析 JS 的时候，会提供一个供 JS 代码运行的环境，这个环境称之为“全局作用域 (global/window scope)”
2. 变量提升
3. 代码自上而下执行

- 基本类型的值存储在当前作用域下
  - `var a = 12;` 的操作步骤
    - 1. 首先开辟一个栈内存空间存储`12`
    - 2. 在当前作用域中声明一个变量 `var a`
    - 3. 让声明的变量和存储 12 进行关联（把存储的 12 赋值给 a，赋值操作叫做定义）
  - 基本数据类型（值类型），是按照值来操作的；把原有的值复制一份放到新的空间或者位置上，和原来的值没有关系
- 引用数据类型的值不能直接存储到当前的作用域下，需要先开辟一个新的空间（理解为仓库），把内容存储到这个空间中
  - `var obj = {n:100};`
    - 1. 首先开辟一个新的内存空间，把对象中的键值对依次存储起来（此空间有 16 进制的地址）
    - 2. 声明一个变量
    - 3. 让变量和空间地址关联在一起（把空间地址赋值给变量）
  - 引用类型不是按照值来操作，它操作的是空间的引用地址；把原来空间的地址赋值给新的变量，但是原来的空间没有被克隆，还是一个空间，这样就会出现多个变量关联的是相同的空间，相互之间就会存在影响了

* 基本数据类型按值操作
* 引用数据类型按空间地址操作

```js
var obj = {
  n: 10,
  m: obj.n * 10
}; // Uncaught TypeError: Cannot read property 'n' of undefined
console.log(obj.m);

1. 形成全局作用域；
2. 代码自上而下执行；
3. 首先开辟新的堆内存 (0XAAAFFF)，把键值对存储到堆内存中
  n: 10, m: obj.n * 10 => obj.n? 此时堆内存信息还没有存储完成，空间的地址还没有给obj, 此时的obj是undefined，obj.n <=> undefined.n

var obj = {
  n: 10,
  m: this.n * 10
};
console.log(obj.m); // NaN

{m:10, n: this.n * 10} 的this默认是指向window对象，而window对象没有 n属性，因此，this.n => undefiend, undefined * 10 => NaN

var n = 9;
var obj = {
  n: 10,
  m: this.n * 10
};
console.log(obj.m); // 90
```

## function

### 函数执行

> 私有作用域：把之前创建函数时存储的字符串代码执行

目的：存储到堆内存中的代码字符串变为真正的 JS 代码自上而下执行，从而实际应有的功能

1. 函数执行，首先会形成一个私有的作用域（一个供代码执行的环境，也是一个栈内存）
2. 在堆内存中存储的字符串复制一份过来，变为真正的 JS 代码，在新的开辟的作用域中自上而下执行

### 变量提升机制

当栈内存（作用域）形成，JS 代码自上而下执行之前，浏览器首先会把所有的带`var/funcstion`关键字进行提前的**声明或者自定义**，这种预先处理机制称之为**变量提升**

- 声明(declare): `var a/function sum` (默认值值`undefined`)
- 定义(defined): `a=12` (定义就是赋值操作)

- 变量提升阶段
  - 带 var 的之**声明未定义**
  - 带 function 的**声明和赋值**都完成
- 变量提升只发生在当前作用域（例如：开始加载页面的时候只对全局作用域下的进行提升，因为此时函数中存储的都是字符串而已）
- 全局作用域下声明函数或者变量时**全局变量**，在私有作用域下声明的变量时**私有变量**(带`var/function`的才是声明)
- 当代码执行遇到创建函数代码后，浏览器直接跳过此代码（因为在提升阶段就已经完成函数的赋值操作了）
- 私有作用域形成后，也不是立即代码执行，而是先进行进行变量提升（变量提升前，先形参赋值）
- 在 ES3/ES5 语法规范中，只有全局作用域和函数执行的私有作用域（栈内存），其他大括号不会形成栈内存

- 在全局作用域下声明的变量，等价于`window`全局对象设置属性（变量时属性名，变量值是属性值）
- 私有作用域中声明的私有变量和 window 对象没啥关系
- `in`检测某个属性是否隶属于这个对象 `'name' in window`
- **全局变量和 window 对象属性**存在**映射机制**

不加`var`的本质是`window`属性

```js
// 先判断是否存在a变量，然后在检查是否存在windows对象属性a
console.log(a); // Uncaught ReferenceError: a is not defined
console.log(window.a); // undefined
console.log("a" in window); // false
a = 12; // window.a = 12
console.log(a); // 12
console.log(window.a); /// 12
```

#### 私有作用域中带 var 和不带的区别

1. 带`var`在私有作用域变量提升阶段，都声明未私有变量，和外界没有任何的关系
2. 不带`var`不是私有变量，会向它的上级作用域查找，看它是否为上级的变量，不是，继续向上查找，一直找到 window 对象的属性为止（这种查找机制叫做**作用域链**）。

```js
console.log(a, b); // undefined, undefined
var a = 12,
  b = 12;

function fn() {
  console.log(a, b); // undefined 12
  var a = (b = 13);
  console.log(a, b); // 13 13
}

fn();
console.log(a, b); // 12 13
```

#### 等号左边变量提升

```js
/*
 变量提升
 var fn = undefined;
 sum = $AFAFAF
*/
fn(); // Uncaught TypeError: fn is not a function
sum();
var fn = function() {
  console.log(1);
}; // 代码执行到此处会把函数值赋值给fn
function sum() {
  console.log(2);
}
```

#### 条件判断下的变量提升

> 当前作用域下，不管条件是否成立都要进行变量提升

- 带`var`的还是只声明
- 带`function`的在老版本浏览器渲染机制下，声明+定义都处理，但是为了迎合 ES6 中的块级作用域，新版本浏览器对于函数（在条件判断中的函数），不管条件是否成立，都只是先声明，没有定义

```js
console.log(fn); // undefined
if (1 === 1) {
  console.log(fn); // 函数本身：当条件成立，进入到判断体重（ES6中它是一个块级作用域）第一件事并不是代码执行，而是类似于变量提升一样，先把fn声明和定义了，也就是判断体重代码执行之前，fn就已经赋值了
  function fn() {
    console.log("ok");
  }
}
console.log(fn); // 函数本身
```

#### 重名问题的处理

```js
/*
 带var和function关键字声明相同的名字，这种也算是重名了（其实是一个fn，只是存储值的类型不一样）
*/
var fn = 12; // window.fn = 12
function fn() {
  // window.fn = function(){}
}

/*
 重名的处理：如果名字重复了，不会重新的声明，但是会重新的定义（重新赋值）[不管是变量提升还是代码执行阶段皆是如此]

 变量提升：
 var fn = $A
        = $B
        = $C
        = $D
*/
fn(); // 4
function fn() {
  console.log(1);
} // $A
fn(); // 4
function fn() {
  console.log(2);
} // $B
fn(); // 4
var fn = 100; // 已经上面声明了，忽略 var fn
fn(); // Uncaught TypeError: fn is not function
function fn() {
  console.log(3);
} // $C
fn(); // 不会执行
function fn() {
  console.log(4);
} // $D
fn(); // 不会执行
```

### 创建的变量不存在变量提升

> ES6 中基于`let/const`等方式创建斌量或者函数，不存在变量提升机制
> 切断了全局变量和 window 属性的映射机制
> 在相同的作用域中，基于 let 不能声明相同名字的变量（不管用什么方式在当前作用域下声明了变量，再次使用 let 创建都会报错）
> 最燃没有变量提升机制，但是在当前作用域代码自伤而下执行之前，浏览器会做一个重复性检测（语法检测）；自上而下查找当前作用域下所有变量，一旦发现有重复的，直接抛出异常，代码也不会再执行了（虽然没有把变量提前声明定义，但是浏览器已经记住了，当前作用域下有哪些变量）

```js
console.log(a); // Uncaught ReferenceError: a is not defined
let a = 12;
let fn = () => {};

console.log(window.a); // undefined

let a = 13; // Uncaught SyntaxError: Identifier 'a' has already been declared
```

### 暂时性死区

- `let/const`是使用区块作用域
- `var`是使用函数作用域

在`let/const`声明之前就访问对应的变量与常量，会抛出`ReferenceError`错误；但在`var`声明之前就访问对应的变量，则会得到`undefined`

```js
console.log(aVar); // undefined
console.log(aLet); // causes ReferenceError: aLet is not defined
var aVar = 1;
let aLet = 2;
```

> 由`let/const`声明的变量，当它们包含的词法环境(Lexical Environment)被实例化时会被创建，但只有在变量的词法绑定(LexicalBinding)已经被求值运算后，才能够被访问
> 当程序的控制流程在新的作用域(module, function 或 block 作用域)进行实例化时，在此作用域中的用 let/const 声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，也就是对声明语句进行求值运算，所以是不能被访问的，访问就会抛出错误。所以在这运行流程一进入作用域创建变量，到变量开始可被访问之间的一段时间，就称之为 TDZ(暂时死区)。
> 以 let/const 声明的变量，的确也是有提升(hoist)的作用。这个是很容易被误解的地方，实际上以 let/const 声明的变量也是会有提升(hoist)的作用。提升是 JS 语言中对于变量声明的基本特性，只是因为`TDZ`的作用，并不会像使用`var`来声明变量，只是会得到`undefined`而已，现在则是会直接抛出`ReferenceError`错误，而且很明显的这是一个在运行期间才会出现的错误。

let 声明的变量会在作用域中被提升

```js
let x = "outer value"(
  (function() {
    // 这里会产生 TDZ for x
    console.log(x); // TDZ期间访问，产生ReferenceError错误
    let x = "inner value"; // 对x的声明语句，这里结束 TDZ for x
  })()
);
```

在例子中的 IIFE 里的函数作用域，变量 x 在作用域中会先被提升到函数区域中的最上面，但这时会产生 TDZ，如果在程序流程还未运行到 x 的声明语句时，算是在 TDZ 作用的期间，这时候访问 x 的值，就会抛出 ReferenceError 错误。

这几句比较重点的部份是关于初始化的过程。以`let/const`声明的变量或常量，必需是经过对声明的赋值语句的求值后，才算初始化完成，创建时并不算初始化。如果以 let 声明的变量没有赋给初始值，那么就赋值给它 undefined 值。也就是经过初始化的完成，才代表着 TDZ 期间的真正结束，这些在作用域中的被声明的变量才能够正常地被访问。

下面这个例子是一个未初始化完成的结果，它一样是在 TDZ 中，也是会抛出`ReferenceError`错误:

`let x = x`

因为右值(要被赋的值)，它在此时是一个还未被初始化完成的变量，实际上我们就在这一个同一表达式中要初始化它。

> 注: TDZ 最一开始是为了`const`所设计的，但后来的对`let`的设计也是一致的，例子中都用`let`来说明会比较容易。
> 注: 在 ES6 标准中，对于`const`所声明的识别子仍然也经常为`variable(变量)`，称为`constant variable(固定的变量)`。以`const`声明所创建出来的常量，在 JS 中只是**不能再被赋(can't re-assignment)**，并不是**不可被改变(immutable)**的，这两种概念仍然有很大的差异。

```js
var a = 12;
if (true) {
  console.log(a); // Uncaught ReferenceError: a is not defined
  let a = 13;
}
```

- **作用域链**：函数执行会形成一个私有的作用域，形参和在当前作用域中声明的变量都是私有变量，当前的私有作用域有自我保护机制，私有变量和外界是没有关系的，但是如果私有作用域遇到一个非私有的变量，则向它的上级作用域找，如果还不是上级作用域私有的，则继续向上查找，一直找到window为止。这种变量一层层向上查找的机制就是“**作用域链机制**”

- **原型链**：是查找机制，实例首先在自己的私有属性中查找，如果不是私有属性，基于`__proto__`向所属类的原型上进行查找，一直找到`Object.prototype`为止。例如：`obj.hasOwnProperty()`属性就是找到`Object.prototype`才找到的



## this

- 当前方法执行的主体（谁执行的这个方法，那么 this 就是谁，所以 this 和当前方法在哪创建的或者在哪执行的都没有必然的关系）

给元素的某个事件绑定方法，方法中的 this 都是当前操作的元素本身

```js
document.body.onclick = function() {
  // this=body
};
```

函数执行，看函数前面是否有点，有点，那么点前面是谁 this 就是谁，没有点，this 是 window(在 JS 的严格模式下，没有点 this 是 undefined)

```js
let fn = function() {
  console.log(this.name);
};
let obj = {
  name: "哈哈",
  fn: fn
};
fn(); // this:window
obj.fn(); // this=obj
```

构造函数执行，方法中的 this 就是当前实例

## 闭包作用域(scope)

### 查找上级作用域

> 当前函数执行，形成一个私有作用域 A，A 的上级作用域是谁，和它在在哪执行的没有关系，和他**在哪创建(定义)的有关系**，在哪创建的，它的上级作用域就是谁。

**严格模式下 callee 和 caller 不能使用**

[查找上级作用域案例](./closure/查找上级作用域.js)

- JS 中的内存分为堆内存和栈内存

  - 堆内存：存储引用数据类型（对象：键值对 函数：代码字符串）
  - 栈内存：提供 JS 代码执行的环境和存储基本数据类型值

- 堆内存释放

  - 让所有引用堆内存空间地址的变量赋值为 null 即可（没有变量占用这个堆内存了，浏览器会在空闲的时候把它释放掉）

- 栈内存释放
  - 一般情况下，当函数执行完成，所形成的私有作用域（栈内存）都会自动释放掉（在栈内存中存储的值也都会释放掉），但是也有特殊不销毁的情况：
  - 1. 函数执行完成，当前形成的栈内存中，某些内容被栈内存以外的变量占用了，此时栈内存不能释放（一旦释放，外面找不到原有的内容了）
  - 2. 全局栈内存只有在页面关闭的时候才会被释放掉
  - 如果栈内存没有被释放，那么之前在栈内存中存储的基本值也不会被释放，能够一直保存下来

[堆栈内存释放案例](./closure/堆栈内存释放.js)

- 函数代码在堆内存
- 执行环境在栈内存

### 闭包作用域

闭包：函数执行形成一个私有的作用域，保护里面的私有变量不受外界的干扰，这种保护机制称之为“闭包”。

市面上的开发者认为的闭包：形成一个不销毁的私有作用域（私有栈内存）才是闭包

实际应用中少用闭包可以保证 JS 的性能（堆栈内存的性能优化），应该尽可能的减少闭包的使用（不销毁的堆栈内存是耗性能的）

1. 闭包具有**保护**作用：保护私有变量不受外界的干扰
2. 闭包具有**保存**作用：形成不销毁的栈内存，把一些值保存下来，方便后面的调取使用

```js
// 闭包：柯理化函数
function fn() {
  return function() {};
}
var f = fn();

// 闭包：惰性函数
var utils = (function() {
  return {};
})();
```

## 定时器和异步编程

### 定时器

> 设定一个时间并且设定等到的时间，当到达指定的时间，浏览器把对应的方法执行

### 常用定时器

```js
setTimeout([function], [interval]) 执行一次
setInterval([function], [interval]) 执行多次

[function]: 到达时间后执行的方法（设置定时器的时候方法没有执行，到时间浏览器自动执行）
[interval]：时间因子（需要等待的时间 MS：毫秒）
```

- 清楚定时器：以下两个方法中的任何一个都可以清楚用任何方法创建的定时器

  - clearTimeout([序号])
  - clearnInterval([序号])

- 设置定时器返回一个数字类型的定时器的编号；表示第几个定时器（不管是基于 setTimeout 还是 setInterval 创建定时器，这个编号会累加）

### 异步编程

- 所有的事件绑定
- 所有的定时器
- Ajax
- 回到函数

### 浏览器是如何同步异步机制

1. 浏览器是多线程的，JS 是单线程的（浏览器只给 JS 执行分配一个线程）。进程：每个应用程序都是一个进程（浏览器打开一个页面，就相当于开辟一个进程），在一个程序中（进程中）同时运行其他任务，此时一个进程分配多个线程去同时完成多项任务

## 封装动画库

### ES6 中块级作用域

## style

```js
ele.style.float = "left";
ele.style.cssFloat = "left"; // 非IE
ele.style.styleFloat = "left"; // IE
```

```js
. 替换成 []
ele.style.styleAttr = value;
ele.style[styleAttr] = value;
```

```js
// css 内联样式
css 内联样式
ele.style.cssText = 'width:200px;height:200px';
```

```js
后去到浏览器计算后的样式(IE8/7/6 低版本有问题)
getComputedStyle($('box').width

支持 IE8/7/6，标准浏览器不兼容
$('box').currentStyle.width
```

## event

- onmouseover() 鼠标移入事件。mouse 从外部移入到当前元素时触发
- onmouseout() 鼠标移除事件。mouse 从当前元素移除时触发
- onmousedown() 鼠标按下时事件
- onmouseup() 鼠标被松开
- onmousemove() 鼠标被移动
- onload() 页面加载成功触发
- onsubmit() 提交按钮被点击
- onclick() 元素单击事件
- ondblclick() 元素双击事件
- onfocus() 元素聚焦事件
- onblur() 元素离焦事件
- onchange() 元素改变域的内容事件
- onabort() 图像加载被中断
- onerror() 当加载文档或图像时发生某个错误
- onkeydown() 某个键盘被按下
- onkeyup() 某个键盘松开
- onkeypress() 某个键盘被按下或按住
- onreset() 重置按钮
- onresize() 窗口或看框架被调整尺寸
- onselect() 文本被选定

### event 对象

> 当一个事件发生的时候，和当前这个对象发生的这个事件有关的详细信息被临时保存到一个指定地方 event 对象

- IE/Chrome event 是一个内置全局对象
- W3C: 事件对象是通过事件函数的第一个参数传入

如果一个函数是被事件调用的，那么这个函数定义的第一个参数就是事件对象

- 事件对象必须在一个事件调用的函数里面使用才有内容
- 事件函数：事件调用的函数，一个函数是不是事件函数，不在定义时候决定，而是取决于这个调用的时

```js
obj.onclick = function(ev) {
  var ev = ev || event;
  // e.clientX/Y 事件发生的时候，鼠标到页面可视区的距离
};

document.onmouseover = function(ev) {
  var ev = ev || event;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  obj.style.left = ev.clientX + "px";
  obj.style.top = ev.clientY + scrollTop + "px";
};
```

### 事件流

- 事件冒泡

  - 当一个元素接收到事件的时候，会把它接受到的所有传播给他的父级，一直到 window
  - 阻止冒泡：`ev.cancleBubble = true` 阻止当前对象的当前事件的冒泡

- 事件捕获：
  - IE 下没有，在绑定实践中，W3C 下有的

### 事件绑定

- IE：obj.attachEent('on 事件名', 事件函数)
  - 没有捕获
  - 事件名 on 前缀
  - 事件函数执行的顺序：W3C
  - 事件执行的顺序是倒序
- W3C: obj.addEventListener('事件名', 事件函数, 是否捕获); // 是否捕获：默认 false：冒泡，true：捕获
  - 有捕获
  - 事件名没有前缀
  - 事件执行的顺序是正序
  - this 触发该事件的对象

```js
function bind(obj, eventName, fn) {
  if (obj.addEventListener()) {
    obj.addEventListener(eventName, fn, false);
  } else {
    obj.attachEvent("on" + eventName, function() {
      fn.call(obj);
    });
  }
}
function unbind(obj, eventName, fn) {
  if (obj.remvoeEventListener()) {
    obj.removeEventListener(eventName, fn, false);
  } else {
    obj.detachEvent("on" + eventName, function() {
      fn.call(obj);
    });
  }
}
```

## DOM

> DOM is Document Ojbect Model(文档对象模型)

- Document: HTML page
- Document Object: page's elemnt
- Document Object Model: Use JavaScript code Manipulate the elements in the page

DOM is tree type structure

- document
  - html
    - head
      - title
    - body
      - ul
        - li

## [Node Type](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/DOM2-Core.txt)

- Element Node:1
- Attribute Node:2
- Text Node:3

- Parent Node
- Children Node
- First Node
- Last Node
- Previous Node
- Next Node

### document object

#### document method

- `document.getElementById('id')` get 获取某个元素
- `document.getElementByName('name')` 返回名称对象集合
- `document.getElementsByTagName('tag')` 返回带有指定标签对象集合
- `documente.write|writeln()` 向文档写 html 表达式或 javascript 代码
- `document.createTextNode()` 创建节点
- `document.createElement()` 创建元素节点

### Element method

- `element.appendChild()` 向元素添加新的节点，作为最有一个子节点
- `element.getAttribute('attribute')` 返回只读的元素的属性值
- `element.setAttribute('attribute', 'value')` 设置元素的属性值
- `element.innerHTML` 设置或返回元素的内容
- `element.offsetHeight()` 网页尺寸(不包含滚动条)
  - `document.body.offsetWidth || document.documentElement.offsetWidth`
- `element.scrollHeight()` 网页尺寸(包含滚动条)
- `element.insertBefore(new_ele, 指定的元素)` 在指定已有的节点之前插入新节点

在 ie 下如果第二个参数的节点不存在，会报错

在其他标准浏览器下第二个参数不存在，则会以 appendChild 的形式进行插入添加

```js
if (ele.children[0]) {
  ele.insertBefore(new_child, ele.children[0]);
} else {
  ele.appendChild(new_child);
}
```

- `parent_ele.replaceChild(new_node, replace_node);`
- `parent_ele.removeChild(delete_node)`

#### Element attribute

`element.childNodes` 只读一级子节点列表集合(所有[节点类型](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/DOM2-Core.txt))

- 标准：包含了元素和文本(换行)类型的节点，包含非法嵌套的子节点
- 非标准(IE)：只包含了元素类型的节点， IE7- 元素节点(ul)下包含非法节点(p)时，childNodes 不包含非法节点(p)

`element.children` 只读一级子节点列表集合

- 标准：只包含元素类型的节点
- 非标准：只包含元素类型的节点

`element.nodeType` 只读当前元素的节点类型

`element.attributes` 只读当前元素属性列表集合

`element.attributes[0].nodeType == 2`

`element.attributes[0].id` 属性值

`element.firstChild` 返回只读元素的首个子节点

标准：firstChild 会包含文本类型的节点
非标准：只包含元素节点

`element.firstElementChild` 返回只读元素的首个子节点（标准）

非标准 IE 不支持 firstElementChild

```js
if (ele.firstElementChild) {
  ele.firstElementChild.style.background = 'red;
} else {
  ele.firstChild.sytle.background = 'red';
}
var ele = ele.firstElementChild || ele.firstChild;
ele.style.background = 'red';
```

```js
<ul id="list"> </ul>
var ele = document.getElementById('list');
var eleChild = ele.firstElementChild || ele.firstChild;
IE9下 eleChild 是文本节点

解决方案：
if (ele.children[0]) {
  ele.children[0].style.background = 'red';
}
```

- `element.lastChild` 返回只读元素的最后一个子节点
- `element.lastElementChild` 返回只读元素的最后一个子元素
- `element.nextSibling` 返回只读元素的下一个兄弟节点
- `element.nextElementSibling` 返回只读元素的下一个兄弟元素
- `element.previousSibling` 返回只读元素的上一个兄弟节点
- `element.previousElementSibling` 返回只读元素的上一个兄弟元素

上一个或下一个节点有可能是文本节点如何处理？

- `ele.parentNode` 当前元素的只读父节点
- `ele.offsetParent` 当前元素的只读离当前元素最近的一个有定位的父节点，没有定位，则默认 body

IE7 下如果当前元素没有定位默认是 body, 如果有定位，则是 html

IE7 下，如果当前元素的某个父级触发了 layout, 那么 offsetParent 就会指向到了这个触发了 layout 特性的父节点上

IE 7: `ele.currentStyle.hasLayout` 当前元素是否触发 layout (父元素 css 样式 zoom:1，会返回 true，否则返回 false)

### offset

`ele.offsetLet` 只读属性，当前元素到定位父级的距离（偏移值），到当前元素的 `offsetParent` 的距离

- 如果没有定位父级

  - offsetParent -> body / IE7
  - offsetParent -> html

- 如果有定位父级

  - IE7 以下：如果自己没有定位，那么 offset{Left|Top}是到 body 的距离
  - 其他：到定位父级的距离

- 如果自己有定位，那么就是到定位父级的距离

IE7 以下，如果自己没有定位，则 offsetLeft, offsetTop 的 body 的距离，如果当前元素有定位，则到当前元素的 `offsetParent` 的距离

`ele.offsetTop`

### 元素宽高

- ele.style.width: 样式宽度(width+px)
- ele.clientWidth: 可视区域 // 样式宽度+padding
- ele.offsetWidth: 占位宽度 // 样式宽度+padding+border

### table node

```js
tObj.tHead[0].rows.length 行数
tObj.tBodies[0].rows[0].cells.length 列数
tObj.tFoot[0].rows[i].style.backgroundColor = '#000' 单元格
```

## window 对象

### window Attribute

- window.innerHeight 浏览器矿口的内部高度
- window.innerWidth 浏览器矿口的内部宽度

### window method

- window.open() 打开新窗口
- window.close() 关闭当前窗口
- window.setInterval(fn, time)
- widnow.clearInterval(ref)
- window.setTimeout(fn, time)
- window.clearTimout(ref)

## history 对象

> winodow.history 对象包含浏览器的历史(url)集合

### history method

- history.back()
- history.forward()
- history.go(+-{n})

## location 对象

> 获得当前页面的地址（URL）,并把浏览器重定向到新的页面

### location attribute

- location.hostname 主机域名
- location.pathname 页面的路径和文件名
- location.port 端口
- location.protocol 协议
- location.href 当前页面 URL

### location method

- location.assign() 加载新的文档
- location.reload() 重新载入
- location.replace() 替换页面(不记录 history)

## screen 对象

> 包含有关用户屏幕的信息

### screen attribute

- `screen.availWidth` 可用的屏幕宽度
- `screen.availHeight` 可用的屏幕高度
- `screen.height` 屏幕高度
- `screen.width` 屏幕宽度

## String

### String Attribute

`str.length`

### String Method

- `str.charAt([-]?[0-9]+)` : 索引位置的字符，索引 0 开始; -从右到左(-1 开始)
- `str.charCodeAt(0)` : 返回索引位置字符编码(妙=>22937)，没有字符则默认使用索引 0 的字符；{0-9=>48-57, A-Z=>65-90, a-z=>97-122}
- `str.indexOf(字符或字符串, [stratIndex])` : 返回字符所在索引位置，找不到字符则返回-1
- `str.lastIndexOf('字符或字符串', [startIndex])` : 从右到左搜索，第二个值为负数，默认当成 0 处理
- `"-a-b-c-d-e-f-".substr(2, 4)` : -b-c 从起始索引号提取字符串中指定数目的字符
- `"-a-b-c-d-e-f-".substring(2, 4)` : -b 提取字符串中两个指定索引号之间的字符, 第一个参数为负数时，当 0 处理
- `arr.slice(-2, 4)` 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素
- `str.toUpperCase()` 转换成大写
- `str.toLowerCase()` 转换成小写
- `str.split('分隔符')` 返回字符串指定分割的数组
- `arr.join([分隔符])` 返回按照分隔符数组合并成字符串

```js
str.split(separator).join("<span>" + separator + "</span>");
```

### String Static Method

- `String.fromCharCode(22937, 21619)` : 返回字符编码所对应的字符(22937=>妙, 21619=>味)

```js
/************ 加密 **********/
var str = "加密文本";
var cnt = str.length;
var str_encrypt = "";
for (var i = 0; i < cnt; i++) {
  str_encrypt += String.fromCharCode(str.charCodeAt(i) - 520);
}
console.log(str_encrypt);
```

## Global Function

encodeURI(str) // 中文

encodeURIComponent(str); // [:/] 也会编码

## time

> 系统时间对象

```js
var curDate = new Date();
当前系统的时间对象;
typeof curDate == "object"; // true
var iY = curDate.getFullYear();
var iM = curDate.getMonth() + 1;
var iD = curDate.getDate();
var iW = curDate.getDay(); // 0-6:星期日-星期六
var ih = curDate.getHourse();
var im = curdate.getMinutes();
var is = curDate.getSeconds();

/************* 倒计时 *************/
// 数字形式：new Date(YYYY,MM,DD,hh,mm,ss);
// 字符串形式：new Date('June 10, 2013 12:12:12')
var nowDate = new Date(); // 现在时间点（在变）
var newDate = new Date("2018,10,20, 18,18,18"); // 未来时间点（不变）

var distance = Math.floor((newDate - nowDate) / 1000); // 时间差毫秒转换为秒

var dD = Math.floor(distance / 86400); // 天
var dH = Math.floor((distance % 86400) / 3600); // 时
var dM = Math.floor(((distance % 86400) % 3600) / 60); // 分
var dS = Math.floor(distance % 60); // 秒
```

## Array

> 数组也是对象数据类型的，也是由键值对组成的

### Array Attribute

- arr.length

### Array Method

- `arr.push(ele)` 追加到最后
- `arr.unshift(ele)` 追击到最前（IE 6/7 不支持 返回值）
- `arr.pop()` 弹出最后元素
- `arr.shift()` 弹出之前元素
- `arr.splice(0,3,替换字符串或数组)`
- `arr.sort()` ASCII 排序
- `arr.resverse()`
- `arr.indexOf/lastIndexof`
- `arr.concat()`

```JS
arr.sort(function(a,b){
  return parseInt(b)-parseInt(a);
})
```

## Math

- `Math.random()` // 0~1
- `Math.random()*5 + 5` // 5~10
- `Math.round()`
- Math.ceil()
- Math.concat()
- Math.reverse()

## 异常捕获

- 异常： JS 引擎执行 JavaScript 代码的时候，发生了错误，导致程序停止运行
- 异常抛出：当异常产生，并且将这个异常生成一个错误信息

- 异常捕获
  - try{发生异常的代码块} catch(err) {错误信息处理;}
- throw 语句：通过 throw 语句创建一个自定义错误

## 元素对象属性

- ele.className

## 窗口尺寸与大小

- 可视区尺寸: 窗口内内容显示的最大区域
  - document.documentElement.clientWidth
  - document.documentElement.clientHeight
- 滚动高度：内容向上或向左
  - document.body.scrollTop/scrollLeft
  - document.documentElement.scrollTop/scrollLeft
  - document.documentElement.scrollTop/scrollLeft || document.body.scrollTop/scrollLeft\

```js
当前页面的滚动条纵坐标位置
document.documentElement.scrollTop;
而不是：document.body.scrollTop;
documentElement 对应的是 html 标签，而 body 对应的是 body 标签。

在标准w3c下，document.body.scrollTop恒为0，需要用document.documentElement.scrollTop来代替;
如果你想定位鼠标相对于页面的绝对位置时，你会发现google里面1000篇文章里面有999.99篇会让你使用event.clientX+document.body.scrollLeft，event.clientY+document.body.scrollTop，如果你发现你的鼠标定位偏离了你的想象，请不要奇怪，这是再正常不过的事情。
ie5.5之后已经不支持document.body.scrollX对象了
所以在编程的时候，请加上这样的判断
if (document.body && document.body.scrollTop && document.body.scrollLeft)
{
    top=document.body.scrollTop;
    left=document.body.scrollleft;
}
if (document.documentElement && document.documentElement.scrollTop && document.documentElement.scrollLeft)
{
    top=document.documentElement.scrollTop;
    left=document.documentElement.scrollLeft;
}
```

- 内容高度
  - document.body.scrollHeight
  - elementObj.scrollHeight (eleObj 元素对象内容的高度， padding+height+padding)
- 文档高度

  - document.documentElement.offsetHeight
  - document.body.offsetHeight

  - 文档高度=margin+border+padding+height+padding+border+margin

![大小](./images/size.gif)

- clientHeight：元素客户区的大小，指的是元素内容及其边框所占据的空间大小（经过实践取出来的大多是视口大小）
- scrollHeight: 滚动大小，指的是包含滚动内容的元素大小（元素内容的总高度）
- offsetHeight: 偏移量，包含元素在屏幕上所用的所有可见空间（包括所有的内边距滚动条和边框大小，不包括外边距

document.body 和 document.documentElement，同样的属性用 document.body 和 document.documentElemen 表达出来可能会截然不同。

- body 是 DOM 对象里的 body 子节点，即 <body> 标签；
- documentElement 是整个节点树的根节点 root，即<html> 标签；
- DOM 把层次中的每一个对象都称之为节点，就是一个层次结构，你可以理解为一个树形结构，就像我们的目录一样，一个根目录，根目录下有子目录，子目录下还有子目录。
- 以 HTML 超文本标记语言为例：整个文档的一个根就是,在 DOM 中可以使用 document.documentElement 来访问它，它就是整个节点树的根节点。而 body 是子节点，要访问到 body 标签，在脚本中可以写：document.body。
- 除了 documentElement，body 在浏览器下表现方式的不同和各个浏览器对这三个属性的解释不同，ie 下的混杂模式和标准模式也来插了一脚。

### jquery

- jQuery原理：封装常用的方法，有助于快速开发，并且兼容所有浏览器(V2/V3 不兼容低版本浏览器)
  - 刚开始做前段项目的时候大量使用jQuery，但是最近几年都使用MVVM框架，JQ中常用的方法忘的差不多了。jQuery就是一个类，而$()就是创建这个类的一个实例，这个实例是基于内置方法makeArray的类数组。JQ提供的方法有两部分，一部分是放到原型上的，供实例调取使用，一部分是放到对象上的，直接$.xxx调取使用，想要后期自己扩展方法（包括基于jQuery写插件），都基于extend这个方法扩展。
  - jQuery提供了动画、时间、Ajax等常用的方法，使用的时候比较注重一些封装和编程的思想。例如：发布订阅设计模式就是一句jQuery的`$.callback`学习研究的。

在 jQuery 中，`width()`方法用于获得元素宽度；`innerWidth()`方法用于获得`包括内边界（padding）的元素宽度，outerWidth()方法用于获得包括内边界(padding)和边框(border)的元素宽度`，如果`outerWidth()`方法的参数为 true 则`外边界`(margin)也会被包括进来，即获得包括外边框(margin)、内边界(padding)和边框(border)的元素宽度。同理，innerHeight 方法与 outerHeight 方法也是用同样的方法计算相应的高度。

所以说：对于同一个元素应该是：`width()<=innerWidth()<=outerWidth()<=outerWidth(true);`
