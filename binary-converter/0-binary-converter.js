/* Convert a decimal number to binary
 * by Mr. M.
 */ 
 
var total = 0;
var factor = 0;
decimal = prompt("What decimal to convert?");
for (i = 0; i<decimal/2;i++){
	if (Math.pow(2,i) > decimal) {
		factor = i-1;
		break;
	}	
}
alert(factor);
total = decimal - Math.pow(2,factor);
