/*
# Codewars: Sum of Numbers

In this exercise, we are asked to get sum of a range, including the given numbers.

ex: GetSum(1,5) --> 1+2+3+4+5
ex: GetSum(1, -5) --> -5 + -4 + -3 + -2 + -1 + 0 + 1 = -14 

*/

function GetSum (a,b){

	if (a==b) return a;

	var big   = a;
	var small = b;

	if (a<b) { 
		var big = b; 
		var small = a;
	}

	var sum = 0;

	for (var i=small; i<=big; i++){
		sum += i;
	}

	// console.log(sum);
	return sum;
}