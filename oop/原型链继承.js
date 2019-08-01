// 原型继承：子类的原型继承执行父类的一个实例
function A() {
	this.x = 100;
}

A.prototype = {
	constructor: A,
	getX: function () {
		console.log(this.x)
	}
}

function B() {
	this.y = 200;
}

B.prototype = new A()
let f = new B();