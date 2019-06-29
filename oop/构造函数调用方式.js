
//1、
function fn(name){
    this.name=name;
}
//通过new关键字来调用的，那么这种方式就是构造函数的构造函数的调用方式，那么函数内部的this就是该构造函数的实例
var _n=new fn("小明");  //_n有个name属性，值为：小明

//2、
function jQuery(){
    var _init=jQuery.prototype.init;
    //_init就是一个构造函数
    return new _init();
}
jQuery.prototype={
    constructor:jQuery,
    length:100,
    init:function(){
        //this可以访问到实例本身的属性，也可以访问到init.prototype中的属性
        //这里的init.prototype并不是jQuery.prototype
        console.log(this.length);   
        //正确答案：undefined
        //100? 错误的
    }
}