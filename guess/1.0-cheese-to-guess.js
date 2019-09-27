/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

// Declare var answer as an integer between 1 and 100.
var answer = 24;
// Console log or alert the answer while testing.
console.log(answer);
// Declar var guess, set to 0.
var guess = 0;
// Define while loop that runs while guess is not equal to answer
while (guess != answer){
  	// Prompt user for guess.
	guess=prompt("Guess my number (1-100)");
  	/* Add conditionals giving feedback based on guess values */
  	// too low. 
	if(guess<answer) alert("too low");
  	// too high. 
	else if(guess>answer) alert("too high");
  // Close While Loop Brackets
}
// Tell them they guessed it
alert("You got it!");
