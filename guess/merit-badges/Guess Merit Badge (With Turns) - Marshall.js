var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
while (guess != answer) {
	guess = prompt("Guess my number 1 - 100!");
	turns++;
	if (guess < answer) {
		alert("Too low!")
	}
	else if (guess > answer) {
		alert("Too high!")
	}
	else if (guess == answer) {
		alert("You got it in " + turns + " turns!")
	}
}