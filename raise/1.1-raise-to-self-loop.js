/* Function to raise a number to itself using a loop */
var intInput = prompt("Which number would tyou like to elevate?");
alert(raiseToSelf(intInput));

function raiseToSelf(intInput) {
  var intPower=intInput;
  for(i=1;i<intInput;i++) {
    intPower = intPower * intInput;
  }
  return intPower;
}
