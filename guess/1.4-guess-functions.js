/* Adding validator function */

var answer=Math.floor(Math.random()*100)+1;
var guess=0;
var tries=0;
console.log(answer);
while(guess!=answer&&guess!=-1){
	guess = guessCheck();
	tries++;
	if(guess<answer){
		alert("Too low! Go higher!");
	}
	else if(guess>answer){
		alert("Too high! Go lower!");
	}
	else if(guess==-1){
		alert("Goodbye!");
		break;
	}
	else{
		alert("You got it in "+tries+" tries! Great job!");
	}
}

/* Function guessCheck 
 * Validates User Input for guess
 * @param none
 * @return integer
*/
function guessCheck() {
		var goodGuess = false;
		while (goodGuess == false) { 
			guess = prompt("Enter 1-100 or q to quit");
			if (guess == "q") {
				alert("Quitter!");
				goodGuess = true;
				guess = -1;
			}
			else if (guess>0 && guess<101) {
			}
			else {
				alert("Invalid input. Try again.");
			}
		}
		return guess;
}






