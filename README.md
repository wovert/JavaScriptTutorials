# JavaScript

## Data Type

`String typeof VARIABLE` 判断数据类型 {undefined|number|string|boolen|object(包括 null, array, object, function, dom)}

### Sting

- 属性
  - Integer `str.length`: 返回字符串长度
- 方法
  - Char `str.charAt(3)`: 返回索引所在位置的字符

### 数据类型转换

``` js
Number(a) 返回数值或 NaN
parseInt(a)
parseFloat(a)
isNaN(a) : is not a number
```

## scope

- 作用域
- 域：空间、范围、区域

### JS 解释器

1. 查找 var 和 function 参数，遇到重名的只留下最后一个 - JS的预解析
2. 逐行解读代码 - 表达式

## style

``` js
ele.style.float = 'left';
ele.style.cssFloat = 'left'; // 非IE
ele.style.styleFloat = 'left'; // IE
```

``` js
. 替换成 []
ele.style.styleAttr = value;
ele.style[styleAttr] = value;
```

``` js
css 内联样式
ele.style.cssText = 'width:200px;height:200px';
```

``` js
后去到浏览器计算后的样式(IE8/7/6 低版本有问题)
getComputedStyle($('box').width 

支持 IE8/7/6，标准浏览器不兼容
$('box').currentStyle.width
```

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

### event对象

> 当一个事件发生的时候，和当前这个对象发生的这个事件有关的详细信息被临时保存到一个指定地方 event对象

- IE/Chrome event是一个内置全局对象
- W3C: 事件对象是通过事件函数的第一个参数传入

如果一个函数是被事件调用的，那么这个函数定义的第一个参数就是事件对象

- 事件对象必须在一个事件调用的函数里面使用才有内容
- 事件函数：事件调用的函数，一个函数是不是事件函数，不在定义时候决定，而是取决于这个调用的时

```js
obj.onclick = function(ev){
  var ev = ev || event;
  // e.clientX/Y 事件发生的时候，鼠标到页面可视区的距离
}

document.onmouseover = function(ev) {
  var ev = ev || event;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  obj.style.left = ev.clientX + 'px';
  obj.style.top = ev.clientY + scrollTop + 'px';
}
```

### 事件流

- 事件冒泡
  - 当一个元素接收到事件的时候，会把它接受到的所有传播给他的父级，一直到window
  - 阻止冒泡：`ev.cancleBubble = true` 阻止当前对象的当前事件的冒泡

- 事件捕获：
  - IE下没有，在绑定实践中，W3C下有的

### 事件绑定

- IE：obj.attachEent('on事件名', 事件函数)
  - 没有捕获
  - 事件名 on前缀
  - 事件函数执行的顺序：W3C
  - 事件执行的顺序是倒序
- W3C: obj.addEventListener('事件名', 事件函数, 是否捕获); // 是否捕获：默认 false：冒泡，true：捕获
  - 有捕获
  - 事件名没有前缀
  - 事件执行的顺序是正序
  - this触发该事件的对象

``` js
function bind(obj, eventName, fn) {
  if (obj.addEventListener()) {
    obj.addEventListener(eventName, fn, false)
  } else {
    obj.attachEvent('on'+eventName, function() {
      fn.call(obj);
    })
  }
}
function unbind(obj, eventName, fn) {
  if (obj.remvoeEventListener()) {
    obj.removeEventListener(eventName, fn, false)
  } else {
    obj.detachEvent('on'+eventName, function() {
      fn.call(obj);
    })
  }
}
```

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

- `document.getElementById('id')` get 获取某个元素
- `document.getElementByName('name')` 返回名称对象集合
- `document.getElementsByTagName('tag')` 返回带有指定标签对象集合
- `documente.write|writeln()` 向文档写 html 表达式或 javascript 代码
- `document.createTextNode()` 创建节点
- `document.createElement()` 创建元素节点

### Element method

- `element.appendChild()` 向元素添加新的节点，作为最有一个子节点
- `element.getAttribute('attribute')` 返回只读的元素的属性值
- `element.setAttribute('attribute', 'value')` 设置元素的属性值
- `element.innerHTML` 设置或返回元素的内容
- `element.offsetHeight()` 网页尺寸(不包含滚动条)
  - `document.body.offsetWidth || document.documentElement.offsetWidth`
- `element.scrollHeight()` 网页尺寸(包含滚动条)
- `element.insertBefore(new_ele, 指定的元素)` 在指定已有的节点之前插入新节点


在 ie 下如果第二个参数的节点不存在，会报错

在其他标准浏览器下第二个参数不存在，则会以appendChild 的形式进行插入添加

``` js
if (ele.children[0]) {
  ele.insertBefore(new_child, ele.children[0]);
} else {
  ele.appendChild(new_child);
}
```

- `parent_ele.replaceChild(new_node, replace_node);`
- `parent_ele.removeChild(delete_node)`

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

- `element.lastChild` 返回只读元素的最后一个子节点
- `element.lastElementChild` 返回只读元素的最后一个子元素
- `element.nextSibling` 返回只读元素的下一个兄弟节点
- `element.nextElementSibling` 返回只读元素的下一个兄弟元素
- `element.previousSibling` 返回只读元素的上一个兄弟节点
- `element.previousElementSibling` 返回只读元素的上一个兄弟元素

上一个或下一个节点有可能是文本节点如何处理？

- `ele.parentNode` 当前元素的只读父节点
- `ele.offsetParent` 当前元素的只读离当前元素最近的一个有定位的父节点，没有定位，则默认body

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

``` js
tObj.tHead[0].rows.length 行数
tObj.tBodies[0].rows[0].cells.length 列数
tObj.tFoot[0].rows[i].style.backgroundColor = '#000' 单元格
```

## window 对象

### window Attribute

- window.innerHeight 浏览器矿口的内部高度
- window.innerWidth 浏览器矿口的内部宽度

### window method

- window.open() 打开新窗口
- window.close() 关闭当前窗口
- window.setInterval(fn, time)
- widnow.clearInterval(ref)
- window.setTimeout(fn, time)
- window.clearTimout(ref)

## history 对象

> winodow.history 对象包含浏览器的历史(url)集合

### history method

- history.back()
- history.forward()
- history.go(+-{n})

## location 对象

> 获得当前页面的地址（URL）,并把浏览器重定向到新的页面

### location attribute

- location.hostname 主机域名
- location.pathname 页面的路径和文件名
- location.port 端口
- location.protocol 协议
- location.href 当前页面URL

### location method

- location.assign() 加载新的文档
- location.reload() 重新载入
- location.replace() 替换页面(不记录history)

## screen 对象

> 包含有关用户屏幕的信息

### screen attribute

- screen.availWidth 可用的屏幕宽度
- screen.availHeight 可用的屏幕高度
- screen.height 屏幕高度
- screen.width 屏幕宽度

### screen method


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

## 窗口尺寸与大小

- 可视区尺寸: 窗口内内容显示的最大区域
  - document.documentElement.clientWidth
  - document.documentElement.clientHeight
- 滚动高度：内容向上或向左
  - document.body.scrollTop/scrollLeft
  - document.documentElement.scrollTop/scrollLeft
  - document.documentElement.scrollTop/scrollLeft || document.body.scrollTop/scrollLeft\

``` js
当前页面的滚动条纵坐标位置
document.documentElement.scrollTop;
而不是：document.body.scrollTop;
documentElement 对应的是 html 标签，而 body 对应的是 body 标签。

在标准w3c下，document.body.scrollTop恒为0，需要用document.documentElement.scrollTop来代替;
如果你想定位鼠标相对于页面的绝对位置时，你会发现google里面1000篇文章里面有999.99篇会让你使用event.clientX+document.body.scrollLeft，event.clientY+document.body.scrollTop，如果你发现你的鼠标定位偏离了你的想象，请不要奇怪，这是再正常不过的事情。
ie5.5之后已经不支持document.body.scrollX对象了
所以在编程的时候，请加上这样的判断
if (document.body && document.body.scrollTop && document.body.scrollLeft)
{
    top=document.body.scrollTop;
    left=document.body.scrollleft;
}
if (document.documentElement && document.documentElement.scrollTop && document.documentElement.scrollLeft)
{
    top=document.documentElement.scrollTop;
    left=document.documentElement.scrollLeft;
}
```

- 内容高度
  - document.body.scrollHeight
  - elementObj.scrollHeight (eleObj元素对象内容的高度， padding+height+padding)
- 文档高度
  - document.documentElement.offsetHeight
  - document.body.offsetHeight

  - 文档高度=margin+border+padding+height+padding+border+margin

![大小](./images/size.gif)

- clientHeight：元素客户区的大小，指的是元素内容及其边框所占据的空间大小（经过实践取出来的大多是视口大小）
- scrollHeight: 滚动大小，指的是包含滚动内容的元素大小（元素内容的总高度）
- offsetHeight: 偏移量，包含元素在屏幕上所用的所有可见空间（包括所有的内边距滚动条和边框大小，不包括外边距

document.body和document.documentElement，同样的属性用document.body和document.documentElemen表达出来可能会截然不同。

- body是DOM对象里的body子节点，即 <body> 标签；
- documentElement 是整个节点树的根节点root，即<html> 标签；
- DOM把层次中的每一个对象都称之为节点，就是一个层次结构，你可以理解为一个树形结构，就像我们的目录一样，一个根目录，根目录下有子目录，子目录下还有子目录。
- 以HTML超文本标记语言为例：整个文档的一个根就是,在DOM中可以使用document.documentElement来访问它，它就是整个节点树的根节点。而body是子节点，要访问到body标签，在脚本中可以写：document.body。
- 除了documentElement，body在浏览器下表现方式的不同和各个浏览器对这三个属性的解释不同，ie下的混杂模式和标准模式也来插了一脚。

### jquery

在jQuery中，`width()`方法用于获得元素宽度；`innerWidth()`方法用于获得`包括内边界（padding）的元素宽度，outerWidth()方法用于获得包括内边界(padding)和边框(border)的元素宽度`，如果`outerWidth()`方法的参数为true则`外边界`(margin)也会被包括进来，即获得包括外边框(margin)、内边界(padding)和边框(border)的元素宽度。同理，innerHeight方法与outerHeight方法也是用同样的方法计算相应的高度。

所以说：对于同一个元素应该是：`width()<=innerWidth()<=outerWidth()<=outerWidth(true);`