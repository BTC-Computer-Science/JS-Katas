/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
// Declare var playAgain = true
var playAgain = true;
// Keep playing new games as long as playAgain equals true.
while (playAgain == true) {
	// Declare var answer as random integer between 1 and 100.
	var answer = Math.floor(Math.random()*100)+1;
	// alert the answer while testing.
	alert(answer);
	// Declare var guess, set to 0.
	var guess = 0;
	// NEW: Add turns, games, averageTurns as integers
	// Define while loop that runs while guess is not equal to answer
	while (guess != answer){
		// Prompt user for guess.
		guess=prompt("Guess my number (1-100)");
		// break loop if user entered "q" to quit
		if (guess=="q") break;
		// proceed if guess is valid (guessValidator returns true)
		if (guessValidator(guess) == true) { 
			/* Add conditionals that give feedback on values:  if / else if */
			// run guessValidator(prompt) and return true if valid guess
			// If guess less than answer, say too low. 
			if(guess<answer) alert("too low");
			// If guess more than answer, say too high. 
			else if(guess>answer) alert("too high");
		    // Close While Loop Brackets
			// Add 1 to turns
		}
		// otherwise, guess is not true, so tell them so. 
		else alert("Invalid guess.  Try again.");
	}
	// Alert that they got it if guess was equal to answer 
	if (guess == answer) {
		alert("You got it!");
		gameStats();
		playAgain = newGame();
	}
	else alert("Quitter!");
}	

/* Guess Validator 
 * Makes sure it's a good guess so turn can be counted. 
 * Check if Guess is valid integer. If so, return true. 
 * If Guess is invalid, return false. 
 * @param guess
 * @return boolean
 */
function guessValidator(guess){
	
}

/* Game Stats
 * Give player feedback on performance
 * Display turns
 * Add turns to totalTurns
 * Calculate average turns = totalTurns / games
 * Display average turns
 * @return totalturns
 */
function gameStats(){
    	
}

/* Play Again
 * Provide option to stop playing without quitting
 * Prompt for Y or N
 * If Y return true
 * If N alert "Thank you for playing" and return false
 * @return boolean
 */
function newGame(){
	
}
