# JavaScript

## Data Type

`String typeof VARIABLE` 判断数据类型 {undefined|number|string|boolen|object(包括 null, array, object, function, dom)}

### Sting

- 属性
  - Integer `str.length`: 返回字符串长度
- 方法
  - Char `str.charAt(3)`: 返回索引所在位置的字符

### 数据类型转换

Number(a) 返回数值或 NaN

parseInt(a)

parseFloat(a)

isNaN(a) : is not a number

## scope

作用域

域：空间、范围、区域

### JS 解释器

1. 查找 var 和 function 参数，遇到重名的只留下最后一个 - JS的预解析
2. 逐行解读代码 - 表达式

## style

``` float
ele.style.float = 'left';
ele.style.cssFloat = 'left'; // 非IE
ele.style.styleFloat = 'left'; // IE
```

``` js . 替换成 []
ele.style.styleAttr = value;
ele.style[styleAttr] = value;
```

``` js css 内联样式
ele.style.cssText = 'width:200px;height:200px';
```

`getComputedStyle($('box').width` 后去到浏览器计算后的样式(IE8/7/6 低版本有问题)

`$('box').currentStyle.width` 支持 IE8/7/6，标准浏览器不兼容

## event

- onmouseover() 鼠标移入事件。mouse 从外部移入到当前元素时触发
- onmouseout() 鼠标移除事件。mouse 从当前元素移除时触发
- onmousedown() 鼠标按下时事件
- onmouseup() 鼠标被松开
- onmousemove() 鼠标被移动
- onload() 页面加载成功触发
- onsubmit() 提交按钮被点击
- onclick() 元素单击事件
- ondblclick() 元素双击事件
- onfocus() 元素聚焦事件
- onblur() 元素离焦事件
- onchange() 元素改变域的内容事件
- onabort() 图像加载被中断
- onerror() 当加载文档或图像时发生某个错误
- onkeydown() 某个键盘被按下
- onkeyup() 某个键盘松开
- onkeypress() 某个键盘被按下或按住
- onreset() 重置按钮
- onresize() 窗口或看框架被调整尺寸
- onselect() 文本被选定

## DOM

> DOM is Document Ojbect Model(文档对象模型)

- Document: HTML page
- Document Object: page's elemnt
- Document Object Model: Use JavaScript code Manipulate the elements in the page

DOM is tree type structure

- document
  - html
    - head
      - title
    - body
      - ul
        - li

## [Node Type](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/DOM2-Core.txt)

- Element Node:1
- Attribute Node:2
- Text Node:3

- Parent Node
- Children Node
- First Node
- Last Node
- Previous Node
- Next Node

### document object

#### document method

`document.getElementById('id')` get 获取某个元素

`document.getElementByName('name')` 返回名称对象集合

`document.getElementsByTagName('tag')` 返回带有指定标签对象集合

`documente.write|writeln()` 向文档写 html 表达式或 javascript 代码

`document.createTextNode()` 创建节点

`document.createElement()` 创建元素节点

### Element method

`element.appendChild()` 向元素添加新的节点，作为最有一个子节点

`element.getAttribute('attribute')` 返回只读的元素的属性值

`element.setAttribute('attribute', 'value')` 设置元素的属性值

`element.innerHTML` 设置或返回元素的内容

`element.insertBefore(new_ele, 指定的元素)` 在指定已有的节点之前插入新节点

在 ie 下如果第二个参数的节点不存在，会报错

在其他标准浏览器下第二个参数不存在，则会以appendChild 的形式进行插入添加

``` js
if (ele.children[0]) {
  ele.insertBefore(new_child, ele.children[0]);
} else {
  ele.appendChild(new_child);
}
```

`parent_ele.replaceChild(new_node, replace_node);`

`parent_ele.removeChild(delete_node)`

#### Element attribute

`element.childNodes` 只读一级子节点列表集合(所有[节点类型](https://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/DOM2-Core.txt))

- 标准：包含了元素和文本(换行)类型的节点，包含非法嵌套的子节点
- 非标准(IE)：只包含了元素类型的节点， IE7- 元素节点(ul)下包含非法节点(p)时，childNodes不包含非法节点(p)

`element.children` 只读一级子节点列表集合

- 标准：只包含元素类型的节点
- 非标准：只包含元素类型的节点

`element.nodeType` 只读当前元素的节点类型

`element.attributes` 只读当前元素属性列表集合

`element.attributes[0].nodeType == 2`

`element.attributes[0].id` 属性值

`element.firstChild` 返回只读元素的首个子节点

标准：firstChild 会包含文本类型的节点
非标准：只包含元素节点

`element.firstElementChild` 返回只读元素的首个子节点（标准）

非标准IE不支持firstElementChild

``` js
if (ele.firstElementChild) {
  ele.firstElementChild.style.background = 'red;
} else {
  ele.firstChild.sytle.background = 'red';
}
var ele = ele.firstElementChild || ele.firstChild;
ele.style.background = 'red';
```

``` js
<ul id="list"> </ul>
var ele = document.getElementById('list');
var eleChild = ele.firstElementChild || ele.firstChild;
IE9下 eleChild 是文本节点

解决方案：
if (ele.children[0]) {
  ele.children[0].style.background = 'red';
}
```

`element.lastChild` 返回只读元素的最后一个子节点

`element.lastElementChild` 返回只读元素的最后一个子元素

`element.nextSibling` 返回只读元素的下一个兄弟节点

`element.nextElementSibling` 返回只读元素的下一个兄弟元素

`element.previousSibling` 返回只读元素的上一个兄弟节点

`element.previousElementSibling` 返回只读元素的上一个兄弟元素

上一个或下一个节点有可能是文本节点如何处理？

`ele.parentNode` 当前元素的只读父节点

`ele.offsetParent` 当前元素的只读离当前元素最近的一个有定位的父节点，没有定位，则默认body

IE7 下如果当前元素没有定位默认是body, 如果有定位，则是html

IE7下，如果当前元素的某个父级触发了 layout, 那么 offsetParent 就会指向到了这个触发了 layout 特性的父节点上

IE 7: `ele.currentStyle.hasLayout` 当前元素是否触发 layout (父元素css 样式 zoom:1，会返回 true，否则返回 false)

### offset

`ele.offsetLet` 只读属性，当前元素到定位父级的距离（偏移值），到当前元素的 `offsetParent` 的距离

- 如果没有定位父级
  - offsetParent -> body / IE7
  - offsetParent -> html

- 如果有定位父级
  - IE7 以下：如果自己没有定位，那么offset{Left|Top}是到 body 的距离
  - 其他：到定位父级的距离

- 如果自己有定位，那么就是到定位父级的距离

IE7 以下，如果自己没有定位，则 offsetLeft, offsetTop 的 body 的距离，如果当前元素有定位，则到当前元素的 `offsetParent` 的距离

`ele.offsetTop`

### 元素宽高

- ele.style.width: 样式宽度(width+px)
- ele.clientWidth: 可视区域 // 样式宽度+padding
- ele.offsetWidth: 占位宽度 // 样式宽度+padding+border

### table node

`tObj.tBodies[0].rows.length` 行数

`tObj.tBodies[0].rows[i].style.backgroundColor = '#000'` 单元格

## String

### String Attribute

- str.length

### String Method

- `str.charAt([-]?[0-9]+)` : 索引位置的字符，索引0开始; -从右到左(-1开始)
- `str.charCodeAt(0)` : 返回索引位置字符编码(妙=>22937)，没有字符则默认使用索引0的字符；{0-9=>48-57, A-Z=>65-90, a-z=>97-122}
- `str.indexOf(字符或字符串, [stratIndex])` : 返回字符所在索引位置，找不到字符则返回-1
- `str.lastIndexOf('字符或字符串', [startIndex])` : 从右到左搜索，第二个值为负数，默认当成0处理
- `"-a-b-c-d-e-f-".substr(2, 4)` : -b-c 从起始索引号提取字符串中指定数目的字符
- `"-a-b-c-d-e-f-".substring(2, 4)` : -b 提取字符串中两个指定索引号之间的字符, 第一个参数为负数时，当0处理
- `arr.slice(-2, 4)` 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素
- `str.toUpperCase()` 转换成大写
- `str.toLowerCase()` 转换成小写
- `str.split('分隔符')` 返回字符串指定分割的数组
- `arr.join([分隔符])` 返回按照分隔符数组合并成字符串

``` js
str.split(separator).join('<span>' + separator + '</span>');

```

### String Static Method

- `String.fromCharCode(22937, 21619)` : 返回字符编码所对应的字符(22937=>妙, 21619=>味)

``` js
/************ 加密 **********/
var str = "加密文本";
var cnt = str.length;
var str_encrypt = '';
for(var i=0; i<cnt; i++) {
  str_encrypt += String.fromCharCode(str.charCodeAt(i)-520);
}
console.log(str_encrypt);
```

## Global Function

encodeURI(str) // 中文

encodeURIComponent(str); // [:/] 也会编码

## time

> 系统时间对象

``` js
var curDate = new Date(); 当前系统的时间对象
typeof curDate == 'object'; // true
var iY = curDate.getFullYear();
var iM = curDate.getMonth() + 1;
var iD = curDate.getDate();
var iW = curDate.getDay(); // 0-6:星期日-星期六
var ih = curDate.getHourse();
var im = curdate.getMinutes();
var is = curDate.getSeconds();

/************* 倒计时 *************/
// 数字形式：new Date(YYYY,MM,DD,hh,mm,ss);
// 字符串形式：new Date('June 10, 2013 12:12:12')
var nowDate = new Date(); // 现在时间点（在变）
var newDate = new Date('2018,10,20, 18,18,18'); // 未来时间点（不变）

var distance = Math.floor((newDate-nowDate)/1000); // 时间差毫秒转换为秒

var dD = Math.floor(distance/86400); // 天
var dH = Math.floor(distance%86400/3600); // 时
var dM = Math.floor(distance%86400%3600/60); // 分
var dS = Math.floor(distance%60); // 秒

```

## Array

### Array Attribute

- arr.length

### Array Method

- `arr.push(ele)` 追加到最后
- `arr.unshift(ele)` 追击到最前（IE 6/7 不支持 返回值）
- `arr.pop()` 弹出最后元素
- `arr.shift()` 弹出之前元素
- `arr.splice(0,3,替换字符串或数组)`
- `arr.sort()` ASCII 排序

``` JS
arr.sort(function(a,b){
  return parseInt(b)-parseInt(a);
})
```

## Math

- `Math.random()` // 0~1
- `Math.random()*5 + 5` // 5~10
- `Math.round()`
- Math.ceil()
- Math.concat()
- Math.reverse()

## 异常捕获

- 异常： JS引擎执行JavaScript代码的时候，发生了错误，导致程序停止运行
- 异常抛出：当异常产生，并且将这个异常生成一个错误信息

- 异常捕获
  - try{发生异常的代码块} catch(err) {错误信息处理;}
- throw语句：通过throw 语句创建一个自定义错误

## 元素对象属性

- ele.className
- 