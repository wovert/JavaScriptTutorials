
var p1={age:100,gender:"女",say:function(){}}
var p1={age:100,gender:"女",say:function(){}}
var p1={age:100,gender:"女",say:function(){}}
var p1={age:100,gender:"女",say:function(){}}
var p1={age:100,gender:"女",say:function(){}}
var p1={age:100,gender:"女",say:function(){}}

// a、存在很多冗余代码 
// b、所有的人对象都有say方法，并且功能相似，但是他们占据了不同的内存-->会导致内存浪费（内存泄漏）

// 构造函数
function Person(age,gender){
    this.age=age;
    this.gender=gender;
    // 此时的内存依然浪费了->原型
    this.say=function(){
    }
}
// 使用这种方式创建对象，代码整洁了很多
var p1=new Person(5,"未知");
// Person是p1的构造函数
var p2=new Person(5,"未知");
var p3=new Person(5,"未知");
var p4=new Person(5,"未知");
var p5=new Person(5,"未知");
var p6=new Person(5,"未知");