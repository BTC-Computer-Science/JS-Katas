/* Guess Advanced Function by Mr. M. */
// matches https://www.lucidchart.com/invitations/accept/78dd831f-d995-4438-909f-f9d5bbab4ed4

/* Initialize Globals */
var games = 0;
var again = true;
var totalTurns = 0;
/* Play Again Loop */
while (again == true) {
	games++;
	/* Initialize Locals */
	var turns = 0;
	var guess = 0;
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	while (guess != answer){
		guess = prompt("Guess my number (1-100).");
		if (guess == "q"){
			alert("You quit.");
			break;
		}
		if (validate(guess) == true){
			turns++;
			if (guess < answer){
				alert("Too low!");
			}
			else if (guess > answer){
				alert("Too high!");
			}
			else if (guess == answer) {
				gameStats(turns);
				again = newGame();
			}
		}
		else alert("Invalid guess, try again.");
	}
	if (guess == "q") break;
}
// game is over

/* Function validate
 * Ensures guess is a valid integer within answer range
 * @param guess - just to be clear!
 * @return boolean
 */
function validate(guess){
	if (guess > 0 && guess < 101){
		return true;
	}
	else {
		return false;
	}
}

/* Function gameStats
 * shows player games and average turns per game calculated as totalTurns / games
 * @param turns
 * @return none
 * @modifies totalTurns
 */
function gameStats(turns){
	alert("You got it in "+turns+" turns!");
	totalTurns += turns;
	let averageTurns = totalTurns / games;
	alert("You won "+games+" games with an average of "+averageTurns+" turns per game!");
}
	
/* Function newGame
 * Gives player option to play again (y) and returns boolean again, y = true
 * @param none
 * @return boolean  
 */
function newGame(){
	let playAgain = confirm("Play again? Cancel for no.");
	if (playAgain == false) {
		alert("Sorry to see you go!");
		return false;
	}
	else return true;
}

/* Function elegantNewGame
 * Gives player option to play again (y) and returns boolean again, y = true
 * @param none
 * @return boolean  
 */
function elegantNewGame(){
	return confirm("Play again? Cancel for no.");
}
