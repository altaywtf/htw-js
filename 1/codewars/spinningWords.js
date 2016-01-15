/*
# Codewars: spin words
*/

function spinWords(){
	
	a = arguments[0].split(" ")
	w = []

	a.forEach(function (word){
		if(word.length>=5){w.push(word.split('').reverse().join(''))}
		else{w.push(word)}
	})

	return w.join(' ') 
}

spinWords("Hey fellow warriors")