const trumpet = require('trumpet')
const through = require('through2')

const th = through((buffer, encoding, next) => {
  th.push(buffer.toString().toUpperCase())
  next()
}, done => done())

const tr = trumpet()
const stream = tr.select('.loud').createStream()
stream.pipe(th).pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout)
