/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

// Declare var answer as random integer between 1 and 100.
var answer = Math.floor(Math.random()*100)+1;
// Alert the answer while testing.
alert(answer);
// Declare var guess, set to 0.
var guess = 0;
// Declare var tries, set to 0.
var tries = 0;
// Define while loop that runs while guess is not equal to answer
while (guess != answer){
  	// Prompt user for guess.
	guess=prompt("Guess my number (1-100)");
	// Call function guessValidator to see if guess valid
	// break out of loop if guess equals q. 
        if (guess =="q") break;
	// test turn and add turns if guessValidator returns true, passed guess as a parameter 
	if (guessValid==true){
		tries++;  // other examples: tries--, tries+=3;
		/* Add feedback based on guess values: if / else if  */
		// If guess lower than answer, say too low. 
		if (guess<answer) alert("too low");
		// If guess greater than answer, say too high. 
		else if (guess>answer) alert("too high");
	    // Close While Loop Brackets
	}
	// alert "Invalid Guess.  Try again!" otherwise (guessValidator did NOT return true)
	else alert("Invalid guess. Retry!");
}
// If they guessed it, tell them they got it in however many tries. 
if (guess == answer) alert("You got it in "+tries+" tries.");
// Otherwise call them a quitter
else alert("Quitter!");

/* Function guessValidator
 * Checks if guess is valid integer within range (1-100 default)
 * If guess not valid, return false;
 * If guess valid, return true
 * @param guess
 * @return boolean 
 */
function guessValidator(guess){
	// check if guess is valid integer in range
	if (guess > 0 && guess < 101) {
		// if it is, return true
		return true;
	}
	// otherwise, guess is not valid
	else return false;
}
