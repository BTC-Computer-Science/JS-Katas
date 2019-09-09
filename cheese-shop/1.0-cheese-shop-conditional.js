/* JavaScript Conditionals
 * Format: if (boolean expression) (statement), else if (boolean expression) (statement), else (statement)
 */
 
// Declare string cheese flavor, set to Null as default.
var cheeseType = null;
// Prompt user for kind of cheese.
cheeseType = prompt("What cheese would you like?");
/* Add three conditionals that change based on cheeseType values: if / else if / else */
// First one, don't have it. 
if (cheeseType=="cheddar") alert("We don't get much call for that around here.");
// Middle one being "Here's your [cheeseType] cheese" and 
else if (cheeseType=="stilton") alert("Here is your " +cheeseType+ " cheese, sir.");
// The last one "Sorry, no."
else alert("Sorry, no.");
