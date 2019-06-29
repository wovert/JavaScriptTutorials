// 1、创建对象
var person={
    gender:"男",
    height:185,
    toShanghai:function(){
        console.log('做着高端大气上档次的和谐号动车组');
    }
};
// 2、获取属性
console.log(person.gender);         // "男"
console.log(person["height"]);      // 185

// 3、设置属性
person.address="上海市闸北区";
person.height=190;

// 4、删除属性
delete person.gender;
delete person.a;        // 这段代码没有意义，也不会报错

// delete关键字只能删除对象中的属性，不能删除变量
// var a=100;
// delete a;//错误的理解

// 清空对象
person={};      // person对象不再具有任何属性

person=null;    // 表示将person变量的值赋为null，从此以后person不再是一个对象了
