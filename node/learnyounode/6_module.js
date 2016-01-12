// LEARNYOUNODE Exercise 6: Make it Modular - Module File For extFiltering

var fs 	 = require('fs')
var path = require('path')

module.exports = function(pathGiven, extGiven, callback) {

	fs.readdir(pathGiven, function (err, list){
		if (err) return callback(err)
	
		list = list.filter(function (file){
			return path.extname(file) === '.' + extGiven
		})

	callback(null, list)

	})

}