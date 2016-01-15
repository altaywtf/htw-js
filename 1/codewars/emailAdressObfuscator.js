/*
# Codewars: Email Address Obfuscator

In this exercise, we are asked to convert email addresses.

user_name@example.com 	=> user_name [at] example [dot] com
zebras.pyjamas@gmail.com => zebras [dot] pyjamas [at] gmail [dot] com
*/

var test1 = 'code_warrior@foo.ac.uk';
var test2 = 'test@123.com';
var test3 = 'jim.kuback@ennerman-hatano.com'

obfuscate = function (email) {
	var output = [];

	// Seperating [at]
	var modifyAt = email.split('@');

	// Seperating [dot] - name area
	var modifyDotName = modifyAt[0].split('.');

	for (var i=0; i<modifyDotName.length; i++){

		if (i == modifyDotName.length-1) {
			output += modifyDotName[i]
		}

		else {
			output += modifyDotName[i] + " [dot] "
		}

	}

	// Adding [at]
	output += " [at] ";

	// Seperating [dot] - domain area
	var modifyDotDomain = modifyAt[1].split('.');

	for(var i=0; i < modifyDotDomain.length; i++){

		if (i == modifyDotDomain.length-1) {
			output += modifyDotDomain[i]
		} 

		else {
			output += modifyDotDomain[i] + " [dot] " 
		}
	}

	console.log(output);
	// return outout;
}

obfuscate(test1);
obfuscate(test2);
obfuscate(test3);