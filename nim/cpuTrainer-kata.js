// Test function cpuTrainer

// Manually input a current count
// Display current count returned by cpuTrainer

// Define function cpuTrainer, taking count as parameter

// Calculate CPU Turn when count is NOT a multiple of 4.  Use Mod (%)
// Otherwise, if count is 20, CPU should count 1
// Otherwise, CPU should give a random turn 1-3.
// Alert what CPU counts
// Add turn to count
// return count




NOTE:  Below is the actual code ... but DON'T LOOK!

/* Function Tester */
var count = prompt("Enter a count");
alert("Count is now "+cpuTrainer(count));

/* Function CPU Trainter */
function cpuTrainer(count){
	if (count%4 != 0) turn=4-(count%4);
	else if (count==20) turn = 1;
	else turn = Math.floor(Math.random()*3)+1;
	alert("cpu counts "+turn);
	count+=turn;
	return count;
}
