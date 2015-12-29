/*
# Codewars: Filter Unused Digits

In this exercise, we are asked find unused digits.

*/

function unusedDigits() {

	var argDigits = [];
	var diff = [];

	for(var i=0; i<arguments.length; i++){
		argDigits += arguments[i];
		
		if(arguments[i] != i){
			diff += i;
		}
	}

	console.log(argDigits);
	console.log(diff);
}

unusedDigits(0123456789);
unusedDigits(2015, 8, 26);