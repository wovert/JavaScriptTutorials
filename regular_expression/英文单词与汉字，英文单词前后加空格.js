let str = '修宏网络传媒wovert 微明，JavaScript高级程序设计，verry hard study!'

// ?: 不在那个分组
let reg = /(?:(?:([a-zA-Z]+)([\u4e00-\u9fa5]+))|(?:([\u4e00-\u9fa5]+)([a-zA-Z]+)))/g

str = str.replace(reg, (...args) => {
  // reg和str匹配几次，函数就被执行几次
  // arg是数组，存储了每一次匹配捕获到的结果（包含分组捕获的结果）
  let [, one, two, three, four] = args

  if (one && two) {
    return ` ${one} ${two}`; // return
  }
  return ` ${three} ${four}`; // return
})

// console.log(str)


let str2 = '修宏网络传媒wovert 微明，JavaScript高级程序设计，verry hard study!'
let reg2 = /.?([a-zA-Z]+).?/g

str2 = str2.replace(reg2, (...args) => {
  let tmp = /[\u4e00-\u9fa5]/,
    [val, one] = args;
  if (tmp.test(val)) {
    val = val.replace(one, ` ${one} `);
    return val;
  }
  return val;
})

console.log(str2)