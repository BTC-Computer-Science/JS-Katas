/* Program to demonstrate functions by raising an input number to itself using the Math.pow method */
var intInput= prompt("Integer to raise to itself");
alert(raiseToSelf(intInput));

function raiseToSelf(intInput){
	return Math.pow(intInput,intInput);
}
