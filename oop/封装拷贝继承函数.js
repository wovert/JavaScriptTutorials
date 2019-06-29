
function extend(source,target){
    for (var key in source) {
            //key就是o3对象中的每一个属性
        //b、获取到对应的属性值
        var value = source[key];
        //c、把属性值放到o4中
        target[key] = value;
    }
}

var o3={gender:"男",grade:"初三",group:"第五组",name:"张三"};

var o4={};
extend(o3,o4);
o4.name="李四";

var o5={};
extend(o3,o5);
o5.name="李小龙";