// LEARNYOUNODE Exercise 4: My First Async I/O

var fs 	 = require('fs')
var file = process.argv[2]

fs.readFile(file, function(err, bufferObject){
	lineCount = bufferObject.toString().split('\n').length-1
	console.log(lineCount)
})

// My first tryout worked too but sol'n above is more practical
/*

var fs = require('fs')

function read(callback) {
	fs.readFile(process.argv[2], function doneReading(err, bufferObject) {
		lineCount = bufferObject.toString().split('\n').length-1
	callback()
	})
}

function logLineCount() {
	console.log(lineCount)
}

read(logLineCount)
 
 */