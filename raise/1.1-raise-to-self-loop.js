/* Function to raise a number to itself using a loop */
// NOTE TO STUDENT: Leave all the lines in /* Block Comments */ but remove the // Line Comments when submitting. 

/* Global Section */

/* Initializations */ 
// Set integer intInput to value of prompt "Integer to raise to itself" parsed as an Integer.
var input = parseInt(prompt("Which number would you like to elevate?"));

/* Procedures */
// in an alert, call raiseToSelf function referencing global input
alert(raiseToSelf(input));

/* Function Definitions Section */

// Define raiseToSelf Function 
function raiseToSelf(input) {
	// define local variable called result, set it equal to intInput	
	var result=input;
	// create a for loop to do each multiplication: Start at 1, Stop before i = intInput, step by 1
	for(i=1;i<input;i++) {
		// multiply intPower by intInput every time you run the loop
		result = result * input;
  	}
	// return intPower 
 	 return result;
}
