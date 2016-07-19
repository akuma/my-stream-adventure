const through = require('through2')

const tr = through((buffer, encoding, next) => {
  tr.push(buffer.toString().toUpperCase())
  next()
}, done => done())

process.stdin
  .pipe(tr)
  .pipe(process.stdout)
