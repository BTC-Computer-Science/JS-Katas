var yesCount = 0, noCount = 0, votesCast = 0;
var totalVoters = parseInt(prompt("How many voters?"));
while (votesCast < totalVoters) {
	// poll() = "y" ? yesCount++ : noCount++;
	if (poll() == true) yesCount++;
	else noCount++;
	alert (showTally());
}
alert("Final: "+showTally());
alert("Poll now closed. Thank you for voting.");

function poll() {
	votesCast++;
	return confirm("Do you like green eggs and ham? 'ok' for yes or 'cancel' for no.");
}

function showTally() {
	return "Yes: "+yesCount+" No: "+noCount;
}
