/* Dice Kata */

/* Global variables */
var dieSides = 6;
var diceNumber = 2;
var totalRolled = 0;
var rollSum = 0;
// Ask user for how many dieSides (D&D dice go from 4 to 20)
dieSides=prompt("How many sides do you want on your dice?");
// Ask the user for how many dice to roll
diceNumber=prompt("How many dice do you want to roll?");
/* Use a while loop to keep rolling until you have rolled all the dice, adding them together */
// While totalRolled is less than diceNumber, keep rolling
while (totalRolled < diceNumber) {
// roll the die
   roll = Math.floor(Math.random()*dieSides)+1;
// Add new roll to rollSum
   rollSum += roll; 
// Add 1 to totalRolled
  totalRolled ++;
// End Loop
}
// Alert the roll to the user
alert("You rolled a " + rollSum);
