/* JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */
 
// Declare string cheeseType, set to null as default.
var cheeseType = null;
// Create Boolean flag inStock
var inStock = false;
// Define while loop that runs while cheeseType is not equal to stilton
while (inStock == false) {
  // Prompt user for kind of cheese.
  cheeseType = prompt("What cheese would you like?");
  /* Add three conditionals that change based on cheeseType values: if / else if / else */
  // First one, don't have it. 
  if (cheeseType=="cheddar") alert("We don't get much call for that around here.");
  // We need to change our Boolean Flag to true if we have the cheese
  else if (cheeseType=="stilton") inStock=true; 
 // deal with Quit by breaking out of the loop
  else if (cheeseType=="q") break;
  // The last one "Sorry, no."
  else alert("Sorry, no.");
  // Close While Loop Brackets
}
if (cheeseType=="q") alert("You just left the cheese shop");
else alert("Here is your " +cheeseType+ " cheese, sir.");
