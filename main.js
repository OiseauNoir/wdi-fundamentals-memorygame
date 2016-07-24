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

var board = document.getElementById('game-board');

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];


function createBoard() {
  for (var i=0; i<cards.length; i++) {

var cardElement = document.createElement('div');
cardElement.className = 'card';
cardElement.setAttribute('data-card', cards[i]);
cardElement.addEventListener('click', isTwoCards);
board.appendChild(cardElement);
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
	  alert('Hmph. Beginners Luck.');
  } else {
	  alert('Sucker! Try again!');
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  if (cardsInPlay.length ===2) {
  isMatch(cardsInPlay);
  cardsInPlay = [];
  }
}

createBoard();
