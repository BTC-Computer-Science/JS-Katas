// Ask users for how many boxes of Rose-Colored Glasses they want
var rcgBoxes = prompt("How many boxes of Rose-Colored Glasses do you want?");
// Ask users for how many boxes of Pink Paint they want
var ppBoxes = prompt("How many boxes of Pink Paint do you want?");
// Compare the number of boxes of each -- which is more or less? Alert a sentence comparing them. 
if (ppBoxes > rcgBoxes) alert (ppBoxes+" paint boxes is more than "+rcgBoxes+" glasses boxes.");
else alert (ppBoxes+"ppBoxes is less than "+rcgBoxes+" rcgBoxes.");
// Alert the total number of boxes to be delivered
alert("Expect to receive "+(rcgBoxes + ppBoxes)+" boxes.");
