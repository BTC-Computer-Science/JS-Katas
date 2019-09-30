/* Guess program by max */

var answer = Math.floor(Math.random()*100)+1;
var guess = 0;
alert(answer);
while(guess != answer){
	guess = prompt("Guess a number (1-100)");
	if(guess>answer)alert("too high");
	else if(guess<answer)alert("too low");
	else alert("you got it");
}