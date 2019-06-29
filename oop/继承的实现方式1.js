function Dog(){

}
var d1=new Dog();
//为了让d1有一个叫的方法，
//不行：d1.say=function(){}
//正确：
Dog.prototype.say=function(){
  console.log('汪汪汪');
}

// 继承的第一种实现方式：原型链继承