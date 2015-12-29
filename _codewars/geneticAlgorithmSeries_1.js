/*
# Codewars: Genetic Algorithm Series - #1 Generate
*/

const generate = length => {

	var chromosome = "";

	for(var i=1; i<=length; i++){
		bin = Math.floor(Math.random() * 2);
		chromosome += bin;
	}

	// return chromosome;
	console.log(chromosome);

}

generate(5);