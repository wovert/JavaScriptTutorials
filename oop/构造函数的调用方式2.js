
function jQuery(){
    var _init=jQuery.prototype.init;
    //_init就是一个构造函数
    return new _init();
}
jQuery.prototype={
    constructor:jQuery,
    length:100,
    init:function(){
        //this指向init构造函数的实例
        //-->1、首先查看本身有没有length属性
        //-->2、如果本身没有该属性，那么去它的原型对象中查找
        //-->3、如果原型对象中没有，那么就去原型对象的原型对象中查找，最终一直找到根对象（Object.prototype）
        //-->4、最终都没有找到的话，我们认为该对象并没有该属性，如果获取该属性的值：undefined
        console.log(this.length);   //100   
    }
}
var $init=jQuery.prototype.init;
//修改了init函数的默认原型，指向新原型
$init.prototype=jQuery.prototype;

jQuery();