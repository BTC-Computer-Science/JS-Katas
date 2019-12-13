var yesCount = 0, noCount = 0, votesCast = 0;
var totalVoters = parseInt(prompt("How many voters?"));
while (votesCast < totalVoters){
	if (poll() == "y") yesCount++;
	else noCount++;
	alert(showTally());
}
alert("Final: "+showTally());
alert("Poll now closed. Thank you for voting.");

function poll(){
	votesCast++;
	return prompt("Do you like green eggs and ham? [y]es or [n]o");
}

function showTally(){
	return "Yes: "+yesCount+" No: "+noCount;
}

// Method 2: with a Confirm AND a return

// Elegance Challenge: how few lines can you do this with? Either Method. 

// Challenge: On program start, prompt for question, option 1, option 2
