function reverseArray(myArr){

	myNewArr = [];

	for(var i=(myArr.length-1); i>=0; i--){
		myNewArr.push(myArr[i]);
	}

	console.log(myNewArr);

}

// reverseArray([1,2,3,5,6,7,8]);


function reverseArrayInPlace(myArr){

	var temp;

	for(var i=0; i<Math.floor(myArr.length/2); i++){
		
		temp = myArr[myArr.length-1-i];

		myArr[myArr.length-1-i] = myArr[i];

		myArr[i] = temp;
	}

	console.log(myArr);
}

reverseArrayInPlace([1,2,3,4,5,6]);