/* There are 18 items, beginning with 2 (because it's a Google Sheet row).
 * There are around 9 students, with the names of the students in the room now. 
 * For each item, alert it's number, and randomly select a student to evaluate it. 
 */ 
// Initialize Item
var item = 1;
// Initialize Students Array
var students=["Ailsa","Liam","Leo","Max","Ethan","Arianna","Jasper", "Innocent","Dominic"];
// alert(students[5]); Alerts "Arianna"
// iterate over all items with a while loop
while(item < 20) {
// increment the item
  item++;
// alert the message
	alert("Item "+item+ "will be evaluated by "+"student name");
// close the loop
}

/* CHALLENGE: prevent loop from selecting the same student twice */
