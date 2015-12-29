function min(myArray){
	
	if(myArray[0]<myArray[1]){
		console.log(myArray[0]);
	}

	else if(myArray[0]>myArray[1]){
		console.log(myArray[1]);
	}

	else{
		console.log("Something is wrong!")
	}

}

min([5,2]);