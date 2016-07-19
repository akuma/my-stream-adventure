const split = require('split')
const through = require('through2')

let index = 0
const tr = through((buffer, encoding, next) => {
  const line = index++ % 2 === 0 ?
    buffer.toString().toLowerCase() : buffer.toString().toUpperCase()
  tr.push(`${line}\n`)
  next()
}, done => done())

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout)
