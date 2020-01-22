// We are building a sundae with scoops, so you need an array for the scoops, called flavors 
// We are checking flavor requests against flavors in stock, so you need an array called ourFlavors
// This is for a three-scoops sundae, so you'll use a loop. 
// Prompt for each flavor by scoop number
// Use a function called inArray to check if the requested flavor is in stock
// If scoop is in stock, show an alert with "Here's your [flavor] scoop"
// Use conditional logic for addtional options. 
// 	If strawberry, alert "Sorry, we're all out of strawberry."
// 	Else alert "Sorry, we don't carry [flavor]."
// 	Allow selecting another flavor -- don't deprive user of scoops!

var ourFlavors //
var sundaeFlavors //
var scoops = 3;

for (scoop=0;scoop<scoops;scoop++) {
	flavor = prompt("What flavor scoop?");
	if //
		if (flavor == "strawberry") {
			alert("Sorry, we're all out of "+flavor+".");
			scoop=scoop-1;
		}
		else {
			//
		}
	}
	else {
		alert("Sorry, we don't carry "+flavor+".");
		scoop=scoop-1;
		}
} 
alert ("Here's your "+sundaeFlavors+" sundae. Enjoy!");

/* check if requested flavor is in stock */
function inArray(//
	answer=false;
	for (index=0;//
		if (//
			answer=true;
		}
	}
	return answer;
}
