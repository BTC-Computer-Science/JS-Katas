/* JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
 
// Declare string variable cheeseType, set to null (no value).
var cheeseType = null;
// Declare string variable inStock, set to whatever cheese you have today (like, "stilton")
var inStock = "stilton";
// Define while loop that runs while cheeseType is not equal to inStock value
while (cheeseType != inStock) {
  // Prompt user for kind of cheese and store that in the cheeseType variable.
  cheeseType = prompt("What cheese would you like?");
  /* Add three conditionals that change based on cheeseType values: if / else if / else */
  // First one, don't have cheddar because "We don't get much call for that around here"
  if (cheeseType=="cheddar") alert("We don't get much call for that around here.");
  // Middle one, DO have whatever is in inStock: "Here's your [cheeseType] cheese"
  else if (cheeseType==inStock) alert("Here is your " +cheeseType+ " cheese, sir.");
  // Last one, to all other requests: "Sorry, no."
  else alert("Sorry, no.");
  // Close While Loop Brackets
}
