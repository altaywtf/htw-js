/*
# Codewars: Find Your Villain Name

In this exercise, we are asked to return villain names w.r. to the given birthday.
*/

var test = new Date();

function getVillainName(birthday) {

	month 	= birthday.getMonth();
	day   	= birthday.getDate().toString();
	dayLast = day[day.length-1];

	// First Name List
	firstNames = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];

	// Get First Name
	villainFirstName = firstNames[month];

	// Last Name List
	lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];

	// Get Last Name
	villainLastName = lastNames[dayLast];

	console.log(villainFirstName + " " + villainLastName);

	// return villainFirstName + " " + villainLastName;
}

getVillainName(test);