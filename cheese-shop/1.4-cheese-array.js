
// We are checking cheese requests against cheeses carried and in stock, so you need an array called cheeseTypes
// There are many cheeses in cheeseTypes, but few (1) available. We need an array called availableCheeses to store what's here. 
// The customer will buy 1 or more cheese.  Store it in an array boughtCheeses.
// Use a function called inArray to see if what was asked for is, in fact, in the target array.  Use this TWICE - so two parameters!
// If a cheese is in stock, show an alert with "Here's your cheeseType cheese."
// If not available, alert "Sorry, we're all out of cheeseType."
// 	Else alert "I never heard of cheeseType cheese."


var cheeseTypes //
var availableCheeses //
var boughtCheeses //
var cheesesToBuy=prompt("How many types of cheese do you want to buy today?");

for (let ) {
	let cheeseType = prompt("What cheese would you like today, sir?");
	if //
		if () {
			alert("Sorry, we're all out of "+cheeseType+".");
			cheesesToBuy=cheesesToBuy-1;
		}
		else {
			//
		}
	}
	else {
		alert("I never heard of "+cheeseType+" cheese.");
		cheesesToBuy=cheesesToBuy-1;
		}
} 
alert ("Here's your "+boughtCheeses+" cheeses. Enjoy!");

/* check if item is in array */
function inArray(//) {
	answer=false;
	for (index=0;//
		if (//
			answer=true;
		}
	}
	return answer;
}

