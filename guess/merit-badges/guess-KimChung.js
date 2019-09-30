/*Guess Merit Badge By Kim Chung*/

//create the variable "answer" that will generate a random number from 1-100
var answer = Math.floor(Math.random()*100)+1;
//have the computer log the number to the console
console.log(answer);
//create the variable "guess" and set it equal to 0
var guess = 0;
//create a while loop
while (guess != answer){
	//prompt the player to guess a number from 1-100
	guess = prompt("Guess my number (1-100).");
	//create three condition statements and have them alert
	//too low
	if (guess < answer) alert("Too low!");
	//too high
	else if (guess > answer) alert("Too high!");
	//you got it
	else alert("You got it!");
//end bracket
}