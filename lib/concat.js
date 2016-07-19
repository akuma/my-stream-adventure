const concat = require('concat-stream')

process.stdin
  .pipe(concat(buffer => {
    const result = buffer.toString()
      .split('')
      .reverse()
      .join('')
    console.log(result)
  }))
