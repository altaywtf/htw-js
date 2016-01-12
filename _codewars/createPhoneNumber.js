/*
# Codewars: Create Phone Number

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"
*/

function createPhoneNumber (numbers) {

	var pNum = "(";

	for(var i=0; i<3; i++){ pNum += numbers[i] }

	pNum += ") "

	for(var i=3; i<6; i++){ pNum += numbers[i] }

	pNum += "-"

	for(var i=6; i<10; i++){ pNum += numbers[i] }

	return pNum

}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

/*

Solving With substring()

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
}

*/