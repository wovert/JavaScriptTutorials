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

`element.firstChild` 返回元素的首个子节点

`element.lastChild` 返回元素的首个最有一个子元素

`element.getAttribute('attribute')` 返回只读的元素的属性值

`element.setAttribute('attribute', 'value')` 设置元素的属性值

`element.innerHTML` 设置或返回元素的内容

`element.insertBefore()` 在指定已有的节点之前插入新节点

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

### table node

`tObj.tBodies[0].rows.length` 行数

`tObj.tBodies[0].rows[i].style.backgroundColor = '#000'` 单元格

## String对象

"-a-b-c-d-e-f-".substr(2, 4); // -b-c 从起始索引号提取字符串中指定书目的字符

"-a-b-c-d-e-f-".substring(2, 4); //-b 提取字符串中两个指定索引号之间的字符

## 全局函数

encodeURI(str) // 中文

encodeURIComponent(str); // [:/] 也会编码



