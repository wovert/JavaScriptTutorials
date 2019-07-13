# Event

## What Event

> 事件就是一件事情或一个行为（对于元素来说，它的很多事件都是天生自带的），操作这个元素，就会触发这些行为
> 事件就是元素天生自带的行为，操作元素会触发相关的事件行为

## 元素自带事件

- 鼠标事件

  - `click`：按下并弹起触发
    - PC：点击
    - 移动端：单击(一定时间内只能点击一次)
      - 300MS 延迟的问题
      - 单击一次之后，在 300MS 以内再次单击会触发 `dblclick` 事件，不会触发 click 事件
  - `dblclick`：双击
  - `mouseover`：鼠标经过元素
  - `mouseout`：鼠标移除元素
  - `mouseenter`：鼠标进入元素
  - `mouseover`：鼠标离开元素
  - `mousemove`：鼠标元素内移动
  - `mousedown`：鼠标元素内按下（左右键都起作用）
  - `mouseup`：鼠标元素内弹起（左右键都起作用）
  - `mousewhell`：鼠标滚轮滚动

- 键盘事件

  - `keydown`：按下
  - `keyup`：弹起，返回键盘码
  - `keypress`：长按并松开，ASCII 码值
  - `input`：移动端是虚拟键盘，`keydown/keyup` 在大部分手机都没有，用 `input` 代替
    - 长按是多次触发事件
    - **内容改变事件**

- 表单元素事件
  - `focus`：获取焦点
  - `blur`：失去焦点
  - `change`：修改内容

## 事件绑定

> 给元素天生自带的事件行为绑定方法，当事件触发，会把对应的方法执行

### DOM0 级事件绑定

`document.body.onclick = function(){}`

### DOM2 级事件绑定

```js
[element].addEventListener([event], callback, false);
[element].attatchEvent(on[event], callback); // IE6-8
```

触发事件绑定函数时，会接口事件实参信息——事件对象

- 事件对象

  - `MouseEvent` 鼠标事件对象
    - `e.target` 事件源(操作的哪个元素)
    - `e.clientX/clientY`: 当前鼠标触发点距离当前窗口左上角 X/Y 轴坐标
    - `e.pageX/pageY`: 当前鼠标触发点距离 `BODY`(第一屏幕)左上角 X/Y 轴坐标
    - `e.preventDefault()`：阻止默认行为
    - `e.stopProgagation()`：阻止事件的冒泡传播
    - `e.type`：当前事件类型
  - `KeyboardEven` 键盘事件对象

    - `e.code`：当前按键 'KeyE'
    - `e.key`：当前按键 'e'
    - `e.which || e.keyCode`：当前按键的键盘码 69
    - 常用的键盘码
      - 左上右下：37-38-39-40
      - Backspace: 8
      - Enter: 13
      - Space: 32
      - Delete: 46
      - Shift: 16
      - Alt: 18
      - Ctrl: 17
      - ESC: 27

  - `Event` 普通事件对象 `(window.onload = function(ev){})`

```js
document.body.onclick = function(ev) {
  console.log("ev事件对象：", ev);
};
```

### 事件对象兼容问题

```js
// IE6-8 里事件对象没有传递过来 ev === undefined，需要基于 window.event 来获取（由于是全局属性，每次操作都会把上一次操作的事件对象替换掉）
e = e || window.event;
target = e.target || e.srcElement; // 获取事件源（标准中使用e.target）
// IE低版本浏览器的事件对象中不存在pageX/pageY
// 兼容不同模式的浏览器
e.pageX =
  e.pageX ||
  e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
```

## 事件默认行为

> 某些事件触发，即时没有绑定方法，也会存在一些效果，这些默认的效果就是“事件的默认行为”

- A 标签点击操作存在默认行为
  - 1.页面跳转
  - 2.锚点点定位（#哈希定位）
- input 标签默认行为
  - 1.输入的内容显示到文本框中
  - 2.输入内容的时候会把之前输入的一些信息显示出来（并不是所有浏览器和所有情况下都有）
- submit 按钮默认行为

  - 点击按钮会刷新

- 阻止默认行为
  - A 标签
    - `<a href="javascript:;"></a>`
    - `<a href="javascript:0/undefiend/null"></a>`
    - `link.onclick = function(e){e = e || window.event; e.preventDefault ? e.preventDefault() : e.returnValue = false}`
      - click 事件绑定方法，当点击 A 标签时，先触发 click 事件，其次才会执行自己的默认行为
