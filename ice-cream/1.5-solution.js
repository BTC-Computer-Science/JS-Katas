// We are building a sundae with scoops, so you need an array for the scoops, called sundaeFlavors 
// We are checking flavor requests against flavors instock, so you need an array called ourFlavors
// This is for a three-scoops sundae, so you'll use a loop. 
// Prompt for each flavor by scoop number
// Use a function called inArray to check if we carry the requested flavor
// If scoop is in stock, show an alert with "Here's your [flavor] scoop"
// Use conditional logic for addtional options. 
// 	If a flavor everybody ate all of, alert "Sorry, we're all out of [that]."
// 	Else alert "Sorry, we don't carry [flavor]."
// 	Allow selecting another flavor -- don't deprive user of scoops!

var sundaeFlavors = [];
var ourFlavors = ["vanilla", "chocolate", "maple"];
var scoops = prompt("How many scoops do you want?");

for (let scoop=0;scoop<scoops;scoop++) {
	let flavor = prompt("What flavor scoop do you want?");
	if (inArray(flavor)==true) {
		if (flavor == "maple") {
			alert("Sorry, we're all out of "+flavor+".");
			scoop=scoop-1;
		}
		else {
			alert("Scoop number "+parseInt(scoop+1)+" will be "+flavor);
			sundaeFlavors[scoop]=flavor;
		}
	}
	else {
		alert("Sorry, we don't carry "+flavor+".");
		scoop=scoop-1;
		}
} 
alert ("Here's your "+sundaeFlavors+" sundae. Enjoy!");

/* check if requested flavor is in stock */
function inArray(flavor){
	let answer=false;
	for (let index=0;index<ourFlavors.length;index++){
		if (flavor==ourFlavors[index]){
			answer=true;
		}
	}
	return answer;
}
