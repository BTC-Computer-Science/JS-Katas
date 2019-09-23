/* JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
 
// Declare string cheeseType, set to null as default.
var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
// Define while loop that runs while cheeseType is not equal to stilton
while (guess != answer){
  // Prompt user for guess.
	guess=prompt("Guess my number (1-100)");
  /* Add three conditionals that change based on cheeseType values: if / else if / else */
  // First one, don't have it. 
	if(guess<answer) alert("too low");
  // Middle one being "Here's your [cheeseType] cheese" and 
	else if(guess>answer) alert("too high");
  // The last one "Sorry, no."
	else alert("You got it!");
  // Close While Loop Brackets
}
