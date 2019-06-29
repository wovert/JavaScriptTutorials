
//模块化思想：也是一种设计模式
var ktv=(function KTV(){
    //为了保护leastPrice变量，将它放在函数内部
    var leastPrice=1000;

    var total=0;

    return {
        //购物
        buy:function(price){
            total+=price;
        },
        //结账
        pay:function(){
            if(total<leastPrice){
                console.log('请继续购物');
            }else{
                console.log('欢迎下次光临');
            }
        },
        editLeast:function(id,price){
            if(id===888){
                leastPrice=price;
                console.log("现在最低消费金额为：",leastPrice);
            }else{
                console.log('权限不足');
            }
        }
    }

})()

//有问题：来了一个工商局的朋友要来唱K
//——>可能老板需要去修改最低消费的金额
//-->但是并不能让老板直接去修改leastPrice，或者说不能把leastPrice作为全局变量



var datepicker=(function(){
    var hour=3600*1000;
    return function(){
        console.log('日期控件初始化');
    }
})();

var common=(function(){
    return {
        isStr:function(){

        },
        isNumber:function(){

        }
    }
})()