/* 
 * Randomizer Prompt
 * Ask the user for the high range (e.g. 6, 100)
 * Generate a random integer between 1 and range
 * Alert it to the screen, with full message (mixed string and variable)
 * Log it to the console
 */


// var creates a global variable called randomizer equal to 0
var randomint = 0; 
// var with prompt asks user for a value for a range variable 
var range = prompt("Range of random value?");
// Math.random generates a random value between 0 and 1 (but not 1)
randomint = Math.random();
// multiply the result to the range we want
randomint = Math.random()*range;
// Math.floor removes everything to the right of the decimal point
randomint = Math.floor(Math.random()*range);
// Add 1 to push range from 0-99 to 1-100
randomint = Math.floor(Math.random()*range)+1;
// alert creates a screen pop-up
alert("Random value is "+randomint);
// console.log writes to the console
console.log("Random value is "+randomint);
