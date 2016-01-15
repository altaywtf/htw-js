// LEARNYOUNODE Exercise 6: Make it Modular

var extFilter 	= require('./6_module.js')

var pathGiven   = process.argv[2]
var extGiven	= process.argv[3]

extFilter(pathGiven, extGiven, function(err, list) {
	
	if(err) return console.error('Error occured: ', err)

	list.forEach(function (file) {
		console.log(file)
	})

})