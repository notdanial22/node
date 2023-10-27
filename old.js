// const number = 10

// if (number > 10){
//  console.log('number is large');
// }else{
//  console.log('it is a small number');
// };

// const names = require('./name');
// const sayHi = require('./utils');
// require('./add');

// // console.log(names);

// sayHi(names.bob)
// sayHi('SUSAN')

// console.log(sayHi);

// const os =require('os');

// const info = os.userInfo()
// console.log(info);

// console.log(`the systems uptime is ${os.uptime} seconds`);

const path = require('path')

// console.log(path.sep);

const join = path.join('/content', 'sub', 'file.txt')
// console.log(join);
console.log(path.basename(join))

console.log(path.resolve(__dirname, 'content', 'sub', 'file.txt'))


const { readFile, writeFile } = require('fs')

// const first = readFileSync('./content/first.txt' , 'utf8')
// const second = readFileSync('./content/second.txt' , 'utf8')

// writeFileSync(
//  './content/third.txt', `Result : ${first},${second}`
// )
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    throw err
  } else {
    console.log(result)
  }
})
