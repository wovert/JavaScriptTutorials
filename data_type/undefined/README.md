# undefined

> 未定义（声明变量，没有赋值，值默认是`undefined`）

`undefined` 代表没有一般都不是认为手动控制的，大部分都是浏览器自主为空（后面可以赋值也可以不赋值）

```js
// 没有声明的变量直接输出，会产生语法错误
console.log(a) // Uncaught ReferenceError: a is not defined

// 第1种
var b; // 声明变量，但是没有赋值，值默认为undefined
console.log(b); // b是undefined类型的值

// 第2种
var c = undefined; // 声明变量，并赋值了 undefined 类型的值
console.log(c);

// 第3种
// 一个对象中，不存在的属性的值是undefined
var d = {};
console.log(d.age); // d对象中没有age属性，d.age的值是undefined

var name; // 此时变量的值浏览器给分配的就是 undefined
...

// 后面可以赋值也可以不赋值

Number(null) => 0
Number(undefined) => NaN
```
