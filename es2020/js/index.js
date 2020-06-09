let a = 10
console.log('a=', a)

window.a = 3
function test() {
  console.log(this.a)
}

test() // 3
test.bind({a: 100})() // 100