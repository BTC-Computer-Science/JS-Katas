/* Program to demonstrate functions by raising a manually input number to itself */
var intInput= prompt("Integer to raise to itself");
alert(raiseToSelf(intInput));

function raiseToSelf(intInput){
	return Math.pow(intInput,intInput);
}
