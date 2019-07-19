function f1(){
    var a=5;
    return function(){
        a++;
        console.log(a);
    }
}
var q1=f1();

//要想释放q1里面保存的a，只能通过释放q1
q1=null;    //q1=undefined