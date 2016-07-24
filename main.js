var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne === cardTwo) {
	alert('Congrats! You found a match!');
} else {
	alert('Bummer! Try again!');
}
*/

//get element with the id game-board - variable
var board = document.getElementById('game-board');

// create board function (will create html for cards and appent the resulting html to div class board)
function createBoard() {

// loop to make html element for cards
for (var i=0; i<cardnumber; i++) {
// create div element which will be used as a card
var cardElement = document.createElement('div');
// add a class to the card element which will help link styling
cardElement.className = 'card';
// append each new card to div calls "board"
board.appendChild(cardElement);
}
}
