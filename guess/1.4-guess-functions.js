/* guess merit badge by hannah */
// guessing game code just like you practiced girl you got this
// remember: variables. prompt the guesser for the answer and alert them. while, if, else if, else. first one too low, second one too high, q to quit as a way to get out of the loop quick, and last one got it. dont forget to keep track of the answer somewhere, and finish every line with a "bow" ;) lets do this :D

var answer=Math.floor(Math.random()*100)+1;
var guess=0;
var tries=0;
console.log(answer);
while(guess!=answer && guess!=-1){
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
		var guess = 0;
		while (goodGuess == false) { 
			guess = prompt("Enter 1-100 or q to quit");
			if (guess == "q") {
				alert("Quitter!");
				goodGuess = true;
				guess = -1;
			}
			else if (guess>0 && guess<101) {
				goodGuess = true;
			}
			else {
				alert("Invalid input. Try again.");
			}
		}
		return guess;
}

