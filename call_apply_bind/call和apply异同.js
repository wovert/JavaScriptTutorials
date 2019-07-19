
//call和apply都可以改变函数内部的this的值
//不同的地方：传参的形式不同

function toString(a,b,c){
    console.log(a+" "+b+" "+c);
}
toString.call(null,1,3,5)   //"1 3 5"
toString.apply(null,[1,3,5])//"1 3 5"