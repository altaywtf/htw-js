// LEARNYOUNODE Exercise 5: Filtered Listing

var fs 	 = require('fs')
var path = require('path')

var pathGiven = process.argv[2]
var extGiven  = '.'+process.argv[3]

fs.readdir(pathGiven, function(err, list){

	function isExtMatch(file){
		return path.extname(file) == extGiven;
	}

	selectList = list.filter(isExtMatch)

	for(var i=0; i<selectList.length; i++){
		console.log(selectList[i])
	}

})


/* 
Notes:
	path.extname('index.html')
	returns '.html'

more info about path module: https://nodejs.org/api/path.html
*/