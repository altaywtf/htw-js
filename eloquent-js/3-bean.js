function countBs(keyword){

	var numOfBs=0;

	for(var i=0; i<=keyword.length; i++){

		if(keyword.charAt(i)==="B" || keyword.charAt(i)==="b"){
			numOfBs ++;
		}

	}

	console.log(numOfBs);

}

countBs("Burası biraz sıkıcı?");


/* ------------ */

function countChar(keyword, char){

	var numOfChar=0;

	for(var i=0; i<=keyword.length; i++){
		if(keyword.charAt(i) === char){
			numOfChar ++;
		}
	}

	console.log(numOfChar);
}

countChar("cemil cemli midir", "c");