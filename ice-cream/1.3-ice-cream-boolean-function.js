/* This is for a three-scoops sundae, so you'll use a Boolean and a function.  */
/* Main Code */
// define scoop, start at 1
var scoop=1;
// define scoops asking for how many scoops desired
var scoops = prompt("How many scoops?");
// loop while scoop is less than or equal to scoops
while (scoop <= scoops) {
	// call scoopFlavor function, passing scoop as argument
	scoopFlavor(scoop);
	// increment scoop by 1
	scoop++;
// close loop
}
// alert "Enjoy!"
alert ("Enjoy!");

/* function scoopFlavor
 * checks if flavor is in stock and offers scoop if it is. 
 * inStock true for chocolate, vanilla.  Special out message for stawberry. 
 * if not in stock, keeps asking. 
 * @param scoop
 * @return none
 */
function scoopFlavor(scoop){
	// define inStock as boolean, set to false
	var inStock=false;
	// Keep looping until inStock is true
	while (inStock==false){
		// Prompt for a flavor by scoop number
		var flavor = prompt("What flavor for scoop "+scoop+"?");
		// Use conditional logic to check responses where flavor is equal to chocolate or vanilla
		if (flavor == "chocolate" || flavor == "vanilla"){
			//  If scoop is in stock, show an alert with "Here's your [flavor] scoop"
			alert("Here's your "+flavor+" scoop.");
			// return true because flavor is in stock
			inStock=true;
		}
		// If strawberry, alert "Sorry, we're all out of strawberry."
		else if (flavor == "strawberry") alert("Sorry, we're all out of "+flavor+".");
		// Else alert "Sorry, we don't carry [flavor]."
		else alert("Sorry, we don't carry "+flavor+".");
		// close while
	}
	// close function
}
