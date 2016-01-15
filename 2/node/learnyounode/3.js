// LEARNYOUNODE Exercise 3: My First I/O

var fs = require('fs')

var read = fs.readFileSync(process.argv[2]).toString().split('\n')

console.log(read.length-1)