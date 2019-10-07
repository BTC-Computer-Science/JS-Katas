/* Program to demonstrate functions by raising an input number to itself using the Math.pow method */
// NOTE TO STUDENT: Leave all the lines in /* Block Comments */ but remove the // Line Comments when submitting. 
/* Global Section */

/* Initializations */ 
// Set integer intInput to value of prompt "Integer to raise to itself"
var intInput= prompt("Integer to raise to itself");

/* Procedures */
// in an alert, call raiseToSelf function, sending intInput as argument
alert(raiseToSelf(intInput));

/* Function Definitions Section */
// Define raiseToSelf Function with intInput as parameter
function raiseToSelf(intInput){
	// return intInput raised to the power of intInput using Math.pow (look up in w3Schools if necessary)
	return Math.pow(intInput,intInput);
}
