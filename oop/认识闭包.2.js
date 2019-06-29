//例1：
function fn(){
    var a=5;
    return function(){
        a++;
        console.log(a);     //a变量肯定是可以访问的
    }
}
var f1=fn();        //f1指向匿名函数
f1();       //6
f1();       //7
f1();       //8
//把a变量的值放在f1函数可以访问到的地方

var f2=fn();
f2();       //6
f2();       //7
f2();       //8
//又一次执行了fn，又初始化了一个新的a变量，值为5；返回匿名函数f2，并且把新的a变量放在了f2可以访问到的地方

var f3=fn();
f3();       //6
//又一次执行了fn，又初始化了一个新的a变量，值为5；返回匿名函数f2，并且把新的a变量放在了f2可以访问到的地方



//例2：
function q1(){
    var a={};
    return a;
}
var r1=q1();
var r2=q1();
console.log(r1==r2);


function q2(){
    var a={}
    return function(){
        
        return a;
    }
}
var t3=q2();//创建一个新的a对象，把a对象放在t3可以访问到的位置

var o5=t3();    //返回值a就是那个a



var w3=q2();//创建了一个新的a对象，把新的a对象放在w3可以访问到的位置

var o8=w3();//此时获取到的是一个新的a对象
console.log(o5==o8);    //false