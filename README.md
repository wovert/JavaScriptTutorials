# JavaScript

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

### document 对象

获取元素：document.getElementById('id')

返回名称对象集合: document.getElementByName('name')

返回带有指定标签对象集合: document.getElementsByTagName('tag');

write/writeln() 向文档写 html 表达式或 javascript 代码。

创建节点： document.createTextNode()

创建元素节点：document.createElement()


### 元素对象

element.appendChild() 向元素添加新的节点，作为最有一个子节点

element.firstChild 返回元素的首个子节点

element.lastChild 返回元素的首个最有一个子元素

element.getAttribute('attribute') 返回元素的属性值

element.setAttribute('attribute', 'value') 设置元素的属性值

element.innerHTML 设置或返回元素的内容

element.insertBefore() 在指定已有的节点之前插入新节点

### 表格节点

行数：tObj.tBodies[0].rows.length

单元格. tObj.tBodies[0].rows[i].style.backgroundColor = '#f00';

## String对象

"-a-b-c-d-e-f-".substr(2, 4); // -b-c 从起始索引号提取字符串中指定书目的字符

"-a-b-c-d-e-f-".substring(2, 4); //-b 提取字符串中两个指定索引号之间的字符


## 全局函数

encodeURI(str) // 中文

encodeURIComponent(str); // [:/] 也会编码



