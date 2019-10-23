/* This is for a three-scoops sundae, so you'll use a Boolean and a function.  */
/* Main Code */
// define scoop, start at 1

// define scoops asking for how many scoops desired

// loop while scoop is less than or equal to scoops

	// call getScoop function, passing scoop as argument

	// increment scoop by 1

// close loop

// alert "Enjoy!"


/* function getScoop
 * checks if flavor is in stock and offers scoop if it is. 
 * inStock true for chocolate, vanilla.  Special out message for stawberry. 
 * if not in stock, keeps asking. 
 * @param scoop
 * @return none
 */

	// define inStock as boolean, set to false

	// Keep looping until inStock is true

		// Prompt for a flavor by scoop number

		// Use conditional logic to check responses where flavor is equal to chocolate or vanilla

			//  If scoop is in stock, show an alert with "Here's your [flavor] scoop"

			// setinStock to true because flavor is in stock

      // close if

		// If strawberry, alert "Sorry, we're all out of strawberry."

		// Else alert "Sorry, we don't carry [flavor]."

		// close while

	// close function

