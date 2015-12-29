/*
# Codewars: Fizz / Buzz
*/

function solution (number) {

	var A = 0, B = 0, C = 0;

	for(var i=1; i<number; i++){

		if(i%3==0 && i%5!=0) A ++
		if(i%5==0 && i%3!=0) B ++
		if(i%5==0 && i%3==0) C ++
	}

	// console.log(A, B, C);

	return [A, B, C];

}

solution(20)