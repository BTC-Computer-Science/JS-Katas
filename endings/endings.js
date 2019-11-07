// declare and set answer as random number 1-10
var answer=Math.floor(Math.random()*10)+1;
// declare and guess to 0
var guess = 0;
// loop while guess is not answer and guess is not q
while (guess != answer && guess !="q") {
// ask user for new guess
  guess = prompt("new guess?");
// say "right" if right, "wrong" if wrong, "quitter" if q. 
  if (guess == answer) alert("right");
  else if (guess == "q") alert ("quitter!");
  else alert("wrong!");
// end loop
}
