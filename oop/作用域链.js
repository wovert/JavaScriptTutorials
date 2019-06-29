function fn(callback){
    
    var age=18;
    callback()
}

fn(function(){
    console.log(age);
    //分析：age变量：
    //1、查找当前作用域：并没有
    //2、查找上一级作用域：全局作用域
    //-->难点：看上一级作用域，不是看函数在哪里调用，而是看函数在哪里编写
    //-->因为这种特别，我们通常会把作用域说成是：词法作用域
})
