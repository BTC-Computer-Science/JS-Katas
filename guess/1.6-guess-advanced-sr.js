/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
// Declare var playAgain = true
var playAgain = true;
var totalTurns = 0;
var games = 0;

while (playAgain == true) {
  var turns = 0;
  
	// Declare var answer as random integer between 1 and 100.
	var answer = Math.floor(Math.random()*100)+1;
	// alert the answer while testing.
	alert(answer);
	// Declare var guess, set to 0.
	var guess = 0;
	// NEW: Add turns, games, averageTurns as integers
	// Define while loop that runs while guess is not equal to answer
	while (guess != answer && guess != "q"){
		// Prompt user for guess.
		guess=prompt("Guess my number (1-100)");
		if (guessValidator == true) { 
			/* Add conditionals that give feedback on values:  if / else if */
			// run guessValidator(prompt) and return true if valid guess
			// If guess less than answer, say too low. 
			if(guess<answer) alert("too low");
			// If guess more than answer, say too high. 
			else if(guess>answer) alert("too high");
		    // Close While Loop Brackets
			// Add 1 to turns
		}
    turns++;
    
    if (guess!="q" && guess!=answer) {
      alert("Invalid guess.  Try again.");
    }
	}
  
  if (guess=="q") {
    alert("Quitter!!");
  }
  if (guess!="q") {
    gameStats();
    games++;
  }
  
	playAgain = newGame();
}	

/* Guess Validator 
 * Makes sure it's a good guess so turn can be counted. 
 * Check if Guess is valid integer. If so, return true. 
 * Check if Guess is "q" - if so, break (end program)
 * If Guess is invalid, return false. 
 * @param guess
 * @return boolean
 */
function guessValidator(guess){
  if (guess > 0 && guess < 101) {
    return(true);
  } else {
    return(false);
  }
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
  alert("You got it!");
  alert("Turns this game: "+turns);
  totalTurns = totalTurns + turns;
  alert("Your average amount of turns is: "+(totalTurns / games));
  return(totalTurns);
}

/* Play Again
 * Provide option to stop playing without quitting
 * Prompt for Y or N
 * If Y return true
 * If N alert "Thank you for playing" and return false
 * @return boolean
 */
function newGame(){
  var playOnceAgain = null;
  while(playOnceAgain == null) {
    playOnceAgain = prompt("Play again? Y or N");
    if(playOnceAgain == "Y") {
      return(true);
    } else if (playOnceAgain == "N") {
      alert("Ciao!!");
      return(false);
    } else {
      return(null);
    }
  }
}
