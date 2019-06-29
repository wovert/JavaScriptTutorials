
var age=18;
var p={
    age:15,
    say:function(){
        console.log(this.age);
    }
}
var f1=p.say;   //f1是函数
f1();   //函数调用-->this：window       -->this.age=18

function Person(name){
    this.name=name;
}
Person.prototype={
    constructor:Person,
    say:function(){
        console.log(this.name);
    }
}

//函数的第一种调用方式：函数调用    
//  -->函数内部的this指向window
Person("abc");


function fn(){
    this.age=18;
}
fn();