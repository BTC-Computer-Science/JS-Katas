/* JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
 
// Declare string cheeseType, set to null as default.
var cheeseType = null;
// Define while loop that runs while cheeseType is not equal to stilton
while (cheeseType != "stilton") {
  // Prompt user for kind of cheese.
  cheeseType = prompt("What cheese would you like?");
  /* Add three conditionals that change based on cheeseType values: if / else if / else */
  // First one, don't have it. 
  if (cheeseType=="cheddar") alert("We don't get much call for that around here.");
  // Middle one being "Here's your [cheeseType] cheese" and 
  else if (cheeseType=="stilton") alert("Here is your " +cheeseType+ " cheese, sir.");
  // The last one "Sorry, no."
  else alert("Sorry, no.");
  // Close While Loop Brackets
}
