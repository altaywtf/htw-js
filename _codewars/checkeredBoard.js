/*
# Codewars: Checkered Board

In this exercise, we are asked to draw a checkered board
*/

function checkeredBoard(size){
	var board = [];
	
	if(size%2 == 0){
		var checker1 = "□";
		var checker2 = "■";
	}

	else{
		var checker2 = "□";
		var checker1 = "■";
	}

	if(size<2) return false;
	if(Number.isInteger(size) == false) return false;

	for(var j = 1; j<=size; j++) {

		for(var i = 1; i<=size; i++){

			if(j%2==1) {
				if(i==size){
					if (i%2 == 1) {board += checker1;}
					else {board += checker2;}
				}

				else{
					if (i%2 == 1) {board += checker1 + " ";}
					else {board += checker2 + " ";}
				}
			}

			else {
				if(i==size) {
					if (i%2 == 1) {board += checker2;}
					else {board += checker1;}
				}

				else {
					if (i%2 == 1) {board += checker2 + " ";}
					else {board += checker1 + " ";}
				}
			}
		}

		if(j!=size){board += "\n";}
	}
	
	console.log(board);
	// return board;
}

checkeredBoard(3);