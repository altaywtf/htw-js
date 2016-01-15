function checkeredBoard(size){
	var board = [];
	var checker1 = "■";
	var checker2 = "□";

	for(var j = 1; j<=size; j++) {

		for(var i = 1; i<=size; i++){

			if(j%2==1) {
				if (i%2 == 1) {board += checker1 + " ";}
				else {board += checker2 + " ";}
			}

			else {
				if (i%2 == 1) {board += checker2 + " ";}
				else {board += checker1 + " ";}
			}
		}

		if(j!=size){board += "\n";}
	}
	
	console.log(board);
}

checkeredBoard(4);