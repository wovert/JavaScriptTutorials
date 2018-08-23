# jQuery

## 位置相关

1. .offset()
2. .position()  --> 相对于定位的父标签的偏移
3. .scrollTop() --> 返回顶部

``` js
$(window).scroll(function(){
  ...
  // 判断窗口距离top有多少
  if ($(window).scrollTop() > 100){
      // 把返回顶部的按钮显示出来, removeClass("hide");
  }
})
  
// 返回顶部的按钮,要做的事儿
$("返回顶部按钮").click(function(){
    // $(window).scrollTop(0);
})
```

4. .scrollLeft()

## 文本操作

1. .html()   --> 子标签和文本内容
    .html("<a href="...">我是a标签</a>")
2. .text()   --> 所有的文本内容
  
3. .val()

获取用户输入的值
  
``` js
$(":text").val()
$(":checked").val()  --> 默认返回的都是第一个标签的值
  
$("#s1").val()       --> select可以直接取选中的值,多选的select返回的是数组格式
  
$("#t1").val()       --> textarea和input:text类似
```

## 属性操作

1. `.attr()   --> $("a").attr("href")`

``` js
$("a").attr("href", "http://www.sogo.com") 
$("a").attr({"href":"http://www.sogo.com", "title": "aaaa"}) 
```

2. `.prop()`   --> 适用于checkbox和radio(返回true或false的属性)

## 事件

1. 目前为止学过的绑定事件的方式

- 1. 在标签里面写 onclick=foo(this);
- 2. 原生DOM的JS绑定      DOM对象.onclick=function(){...}
- 3. jQuery版的绑定事件   jQuery对象.click(function(){...})


2. 我们今后要用的jQuery绑定事件的方式

``` js
.on("click", function(){...})

$("#t1").on("click", "选择器", function(){...})
适用于给未来的元素(页面生成的时候还没有的标签) 绑定事件 (事件委托)

事件冒泡和事件捕获
  利用事件冒泡,给已经存在的标签绑定事件,用来捕获后代标签的事件.
```

3. 事件之间
```JS
  1. 阻止后续事件的执行
      显式的写   return false;  
  2. for循环,退出当前循环 ---> 用break;
```

4. 补充一个键盘事件
  示例:批量操作的

5. DOM加载完之后执行

``` JS
  $(document).ready(function(){
    // 写绑定事件的具体操作
  });
```

## jQuery补充

1. .each循环

``` JS
$.each(a1, function(){...})
2. $("div").each(function(){
  console.log(this);   --> this指的是每次进入循环的标签
})
````

2. .data

- 可以存字符串
- 可以存数字
- 可以存jQuery对象

我们可以给任意的jQuery对象保存数据.

``` JS
$("body").data("k1", "v1");
$("body").data("k2", "v2");
$("body").data("k1");
$("body").removeData("k1")  --> 删除k1的值
```

3. 插件机制

- 给具体的jQuery对象添加扩展 

``` JS
$.fn.extend({
  "s9": function(){
    ...
  }
})

```

2. 给jQuery添加全局扩展

``` JS
$.extend({
  "s9": function(){
    ...
  }
})
```