let str = "the-man is practive is to cultivate his body and cultivate his virtues."

// let reg = /\b([a-zA-Z]+)\b/g;
// str = str.replace(reg, (...args) => {
//   // args[0] 当前找到的单词
//   let val = args[0];
//   return val.substr(0, 1).toUpperCase() + val.substr(1)
// })

let reg = /(?:^| )([^\s]+)(?: |$)/g;
str = str.replace(/ /g, '  ').replace(reg, (...args) => {
  return args[1].substr(0, 1).toUpperCase() + args[1].substr(1) + ' ';
})

console.log(str)