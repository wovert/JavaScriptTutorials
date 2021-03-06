//1、已经拥有了o3对象
var o3={gender:"男",grade:"初三",group:"第五组",name:"张三"};

//2、创建一个o3对象的拷贝(克隆)：for...in循环
var o4={};

//a、取出o3对象中的每一个属性
for (var key in o3) {
    //key就是o3对象中的每一个属性
    //b、获取到对应的属性值
    var value = o3[key];
    //c、把属性值放到o4中
    o4[key] = value;
}

// 3、修改克隆对象，把该对象的name属性改为"李四"
o4.name="李四"
console.log(o4);    //最终的目标对象的结果

// ... 后续如果修改了o4对象中的相关属性，就不会影响到o3
