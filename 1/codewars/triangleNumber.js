/*
# Codewars: Triangle number check
*/

'use strict'

function isTriangleNumber (number) {
	
	let sum = 0

	for(let i=0; i<=number; i++) {
		sum += i
		if(sum == number) {
			return true
			break
		}
	}
	return false
}

isTriangleNumber(11)
isTriangleNumber(10)