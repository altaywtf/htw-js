/*
# Codewars: Genetic Algorithm Series - #3 Crossover
*/

const ch1 = '110111'
const ch2 = '001000'

const crossover = (chromosome1, chromosome2, index) => {

	chOneFinal = ""
	chTwoFinal = ""

	for(var i=0; i<index; i++){
		chOneFinal += chromosome1[i]
		chTwoFinal += chromosome2[i]
	}

	for(var i=index; i<chromosome1.length; i++){
		chOneFinal += chromosome2[i]
		chTwoFinal += chromosome1[i]
	}

	// return [chOneFinal, chTwoFinal];
	console.log(chOneFinal, chTwoFinal)

};

crossover(ch1, ch2, 2);