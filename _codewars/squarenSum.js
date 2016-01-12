/*
# Codewars: square(n) sum
*/

function squareSum (numbers) {

	var sum = 0

	numbers.forEach(function(num){
		sum += Math.pow(num, 2)
	})

	return sum

}

squareSum([1,2,2])