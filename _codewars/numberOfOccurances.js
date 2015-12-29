/*
# Codewars: Number of Occurrences

In this exercise, we are asked to check the occurrence of an array item.

*/

var arr = [4, 0, 4];

Array.prototype.numberOfOccurrences = function(item) {

	tmp = 0;

	for(var i=0; i<this.length; i++){
		if (item == this[i]) {
			tmp ++;
		}
	}

	// return tmp;
	console.log(tmp);

}

arr.numberOfOccurrences(0);
arr.numberOfOccurrences(4);
arr.numberOfOccurrences("a");