function Tiger(){

}
Tiger.prototype={
    a:function(){
        
    },
    b:function(){

    }
}
//创建tiger实例，此时的tiger实例的原型对象是新原型，所以tiger可以访问到新原型中的属性和方法(a/b)
var tiger=new Tiger();
console.log(tiger.a);
console.log(tiger.b);
