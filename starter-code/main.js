var cardOne = "queen";
var cardTwo = "queen";

var cardThree = "king";
var cardFour = "king";


if (cardOne === cardTwo || cardThree === cardFour) {
	alert("You found a match!");
} 

else {
	alert("Sorry, try again.");

}



var board = document.getElementById("game-board");

function createCards() {
	for (var i = 0; i < 4; i = i + 1) {

		// create a div element, it will be used as a card
		var newCards = document.createElement("div");

		// add a class to the card element 
		newCards.className = "card";

		// append the cards to the gameboard 
		board.appendChild(newCards);
	}
}

createCards();



