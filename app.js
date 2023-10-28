const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our home page!')
    res.end()
  } else if (req.url === '/about') {
    res.write('This is about page')
    res.end()
  } else {
    res.write(
      `<h1>Ooops!!</h1><p>this page is not available</p><a href ='/'>Home</a>`
    )
    res.end()
  }
})
server.listen(5000)

const lodash = require('lodash')

const items = [1, [2, [3, 4, [5]]]]
const newitems = lodash.flattenDeep(items)
// console.log(newitems)
