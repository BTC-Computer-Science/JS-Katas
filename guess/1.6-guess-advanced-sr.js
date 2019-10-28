/* Guess Game: Random Integer-Driven JavaScript While Loop */
// Declare var playAgain = true
var playAgain = true;
// Declare totalTurns = 0;
var totalTurns = 0;
// Declare games = 0;
var games = 0;
// set a while loop as long as playAgain is true
while (playAgain == true) {
	// Declare var guess, set to 0.
	var guess = 0;
	// re=set turns since new game
  	var turns = 0;
	// Declare var answer as random integer between 1 and 100.
	var answer = Math.floor(Math.random()*100)+1;
	// log  the answer while testing.
	console.log(answer);
	// Define while loop that runs while guess is not equal to answer
	while (guess != answer && guess != "q"){
		// Prompt user for guess.
		guess=prompt("Guess my number (1-100)");
		if (validator(guess) == true) { 
			/* Add conditionals that give feedback on values:  if / else if */
			// run guessValidator(prompt) and return true if valid guess
			// If guess less than answer, say too low. 
			if(guess<answer) alert("too low");
			// If guess more than answer, say too high. 
			else if(guess>answer) alert("too high");
			// Add 1 to turns
			turns++;
		        // Close While Loop Brackets	
		}
      		else alert("Invalid guess.  Try again.");
    	}
  	if (guess=="q") alert("Quitter!!");
	else if (guess==answer) {
	    	gameStats();
	    	games++;
		playAgain = newGame();
  	}
}	

/* Guess Validator 
 * Makes sure it's a good guess so turn can be counted. 
 * Check if Guess is valid integer. If so, return true. 
 * Check if Guess is "q" - if so, break (end program)
 * If Guess is invalid, return false. 
 * @param guess
 * @return boolean
 */
function validator(guess){
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
