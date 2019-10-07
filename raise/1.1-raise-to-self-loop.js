/* Function to raise a number to itself using a loop */
// NOTE TO STUDENT: Leave all the lines in /* Block Comments */ but remove the // Line Comments when submitting. 

/* Global Section */

/* Initializations */ 
// Set integer intInput to value of prompt "Integer to raise to itself"
var intInput = prompt("Which number would tyou like to elevate?");

/* Procedures */
// in an alert, call raiseToSelf function referencing global intInput
alert(raiseToSelf(intInput));

/* Function Definitions Section */

// Define raiseToSelf Function 
function raiseToSelf() {
  // define local variable intPower equal to intInput	
  var intPower=intInput;
  // create a for loop to do each multiplication: Start at 1, Stop before i = intInput, step by 1
  for(i=1;i<intInput;i++) {
  // multiply intPower by intInput every time you run the loop
    intPower = intPower * intInput;
  }
	// return intPower 
  return intPower;
}
