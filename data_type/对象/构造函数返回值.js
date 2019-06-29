
// 1
function _fn(){
    return 5;
}
var s=new _fn();
// s是_fn构造函数的实例

// 2
function _fn3(){}
var q1=new _fn3();
// q1是_fn3构造函数的实例

// 3
function fn3(){
    return [1,3,5]; 
}
var qw=new fn3();// qw=[1,3,5]
console.log(qw);
// qw不是fn3构造函数的实例

// 如何判断一个数据是否是复杂数据类型？
// 使用排除法：
// a、看它的值是不是：数字、字符串、布尔值、null、undefined，
// b、如果不是以上5种值，那就是复杂数据类型

//   举例：
//  [1,3,5]
//   /abc/
//   function(){}
//   new Object();


// 为什么要理解构造函数的返回值？
// String是一个内置函数
// a、String()
// b、new String()

// 结论：一个函数通过new调用，或者不通过new调用，很多时候会有截然不同的返回值

// 我如何分辨出一个对象到底是不是某个构造函数的实例？
// a、var isTrue=xxx instanceof Person

function Person(){

}
var p1=new Person();
console.log(p1 instanceof Person);// true，就是Person的实例

function Student(){
    return 100;
}
var s1=new Student();
console.log(s1 instanceof Student);// true，就是Student的实例

function Programmer(){
    return [1,3,5]
}
var pro=new Programmer();// pro并不是Programmer的实例
console.log(pro instanceof Programmer);// false

console.log("是数组的实例吗？",pro instanceof Array);// true

// 小技巧：如何通过肉眼识别xxx对象时哪个构造函数的实例？
// xxx.__proto__属性，也是对象，该对象中一般都会有一个constructor属性，这个只想PPP函数，那么就可以认为：xxx是PPP构造函数的实例


// typeof运算符，只能判断：数字、字符串、布尔值、undefined、函数

// 切记：千万不能使用typeof运算符来判断对象的构造函数

// typeof null === "object"
// typeof {}  === "object"
// typeof []  === "object"
// typeof function(){} === "function"
// typeof /abc/     === "object"