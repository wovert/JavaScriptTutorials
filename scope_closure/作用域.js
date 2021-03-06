var gender = "男";
function fn() {
  // console.log(age);    //因为age是在fn作用域内声明的
  //age:undefined：既然有值就是可以访问

  console.log(height); //height不是在该作用域内部声明的，所以不能访问

  //-->2级作用域
  return function() {
    //-->3级作用域
    var height = 180;
  };
  var age = 5;
}

//注意：变量的声明和赋值是在两个不同时期的
function fn() {
  console.log(age); //undeinfed
  var age = 18;
  console.log(age); //18
}

//fn函数执行的时候，首先找到函数内部所有的变量、函数声明，把他们放在作用域中，给变量一个初始值：undefined    -->变量可以访问
//逐条执行代码，在执行代码的过程中，如果有赋值语句，对变量进行赋值

function fn() {
  var age; //初始值：undefined

  console.log(age); //undeinfed
  age = 18; //修改了变量的值
  console.log(age); //18
}

function fn3() {
  console.log(age);
  return function() {};
  var age = 15;
}

//相当于：
function fn3() {
  var age; //初始化：undefined

  console.log(age); //
  return function() {};
  age = 15;
}
