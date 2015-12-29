function sum(myArray){

	var rangeArr = [];
	var total = 0;

	if(myArray[0] > myArray[1]){
		throw new Error("Düzgün range gir, pl0x");
	}

	if((parseInt(myArray[0]) != parseFloat(myArray[0])) || (parseInt(myArray[1]) != parseFloat(myArray[1])))
	{
		throw new Error("Integer gir, pl0x");
	}

	for(var i=myArray[0]; i<=myArray[1]; i++){
		rangeArr.push(i);
	}

	for(var i=0; i<rangeArr.length; i++){
		total += rangeArr[i];
	}

	console.log(total);

}

sum([12,10]);