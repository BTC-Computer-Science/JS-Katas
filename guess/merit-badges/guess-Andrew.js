/*guess by Andrew Dutil*/
var guess=0;
var answer=Math.floor(Math.random()*100)+1;
var turns=0;
console.log(answer);
while(guess!=answer){
	turns++;
	guess=prompt("input a guess 1-100");
	if (guess>answer){
		alert("too high");
	}
	else if (guess<answer){
		alert ("too low");
	}
	else alert("you got it in" +turns+ "turns");
	}
