/* This is for a three-scoops sundae, so you'll use a Boolean and a function.  */
/* Main Code */
var scoop=1;
var scoops = prompt("How many scoops?");
while (scoop <= scoops) {
	// 1) alert what the function returns, don't rely on the function to alert it
	getScoop(scoop);
	scoop++;
}
alert ("Enjoy!");

/* function getScoop
 * checks if flavor is in stock and returns String to offers scoop if it is. 
 * return for chocolate, vanilla.  Special out message for stawberry. 
 * if not in stock, keeps asking. 
 * @param scoop
 * @return message (String)
 */
function getScoop(scoop){
	// Keep asking until scoop in stock
	var inStock=false;
	while (inStock==false){
		// Prompt for a flavor by scoop number
		var flavor = prompt("What flavor for scoop "+scoop+"?");
		// Use conditional logic to check responses where flavor is equal to chocolate or vanilla
		if (flavor == "chocolate" || flavor == "vanilla"){
			//  If scoop is in stock, show an alert with "Here's your [flavor] scoop" <=MOVE THIS
			alert("Here's your "+flavor+" scoop.");
			// return true because flavor is in stock
			inStock=true;
		}
		// If strawberry, alert "Sorry, we're all out of strawberry."
		else if (flavor == "strawberry") alert("Sorry, we're all out of "+flavor+".");
		// Else alert "Sorry, we don't carry [flavor]."
		else alert("Sorry, we don't carry "+flavor+".");
	}
	// 2) define string message as what used to be alerted
	// 3) return string message
}
