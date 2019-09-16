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
  // We need to specify a response to the condition we want - even if it's do nothing
  else if (cheeseType=="stilton") {  } //do nothing
  // The last one "Sorry, no."
  else alert("Sorry, no.");
  // Close While Loop Brackets
}
 alert("Here is your " +cheeseType+ " cheese, sir.");
