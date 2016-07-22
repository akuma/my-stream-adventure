const http = require('http')
const through = require('through2')

const tr = through((buffer, encoding, next) => {
  tr.push(buffer.toString().toUpperCase())
  next()
}, done => done())

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(tr).pipe(res)
  } else {
    res.end('Please send me a POST\n')
  }
})
server.listen(process.argv[2])
