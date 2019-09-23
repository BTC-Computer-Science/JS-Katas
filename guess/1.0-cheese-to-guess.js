/* JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

// Declare var answer, create as random integer between 1 and 100.
var answer = Math.floor(Math.random()*100)+1;
// Console log the answer while testing.
console.log(answer);
// Declar var guess, set to 0.
var guess = 0;
// Define while loop that runs while guess is not equal to answer
while (guess != answer){
  	// Prompt user for guess.
	guess=prompt("Guess my number (1-100)");
  	/* Add three conditionals that change based on guess values: if / else if / else */
  	// First one, too low. 
	if(guess<answer) alert("too low");
  	// Middle one, too high. 
	else if(guess>answer) alert("too high");
  	// The last one, you got it. 
	else alert("You got it!");
  // Close While Loop Brackets
}
