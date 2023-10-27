const http = require('http')

const server = http.createServer((req , res)=>{
 if (req.url === '/'){
  res.end('Welcome  to our home page!')
 }
 if (req.url === '/about'){
  res.end('This is about page')
 }
  res.end(`<h1>Ooops!!</h1><p>this page is not available</p><a href ='/'>Home</a>`)

})
server.listen(5000)