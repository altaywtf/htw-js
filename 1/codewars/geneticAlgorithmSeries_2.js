/*
# Codewars: Genetic Algorithm Series - #2 Mutate
*/

const test1 = "1111"
const test2 = "0000"
const test3 = "1010"

const mutate = (chromosome, p) => {

	var mutated = ""

	for(i=0; i<chromosome.length; i++){

		if(p==1){
			if(chromosome[i]==0){mutated += 1}
			else{mutated += 0}
		}

		if(p>0 && p<1){

			if(p>Math.random()){
				if(chromosome[i]==0){mutated += 1}
				else{mutated += 0}
			}

			else{
				if(chromosome[i]==0){mutated += 0}
				else{mutated += 1}
			}
		}

		if(p==0){
			if(chromosome[i]==0){mutated += 0}
			else{mutated += 1}
		}

	}

	// console.log(mutated);
	return mutated; 

};

mutate(test1, 1);
mutate(test2, 0);
mutate(test3, 0.5);