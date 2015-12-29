function sumRangeStep(start, end, step){

	var myArr = [];
	var mySum = 0;



	for(var i=start; i<=end; i+=step){
		myArr.push(i);
	}

	console.log("Array: " + myArr);

	for(var j=0; j<myArr.length; j++){
		mySum += myArr[j];
	}

	console.log("Sum: " + mySum);
}

sumRangeStep(1,10,1);