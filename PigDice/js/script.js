// Buisness Logic

function rollDice(){
	return Math.floor(Math.random() * (7 - 1) + 1);
}

function Game(player1, player2){
	this.firstPlayer = player1;
	this.secondPlayer = player2;
	this.activePlayer = player1;
}

function Player(playerName, turnScore, gameScore){
  this.playerName = playerName;
	this.turnScore = turnScore;
  this.gameScore = gameScore;
}

let player1 = new Player("PlayerOne", 0, 0);
let player2 = new Player("CPU", 0 , 0);
let players = [player1, player2];
let activePlayer = player1;

/*function changeScore(game){
	console.log("Changing score, p1: " + player1.turnScore + " p2: " + player2.turnScore);
	p1TurnDisplay = player1.turnScore;
	p2TurnDisplay = player2.turnScore;
}*/


Player.prototype.rollDice = function(){ 
	const roll = rollDice();
	console.log("Roll " + roll);
	if (roll > 1) {
		this.turnScore += roll;
		console.log("Turn score: " + this.turnScore);
	}	else {
		this.turnScore = 0;
	}
}

function changeTurn() {
	if (activePlayer === player1){
		activePlayer = player2;
	} else {
		activePlayer = player1;
	}
}

Player.prototype.holdScore = function(){
  this.gameScore += this.turnScore;
	this.turnScore = 0
  console.log("Game score: " + this.gameScore);
 	changeTurn(true)
}

function winGame() {
	if (player1.gameScore >= 10){
		return console.log("Player One wins!")
	} else if (player2.gameScore >= 10){ 
			return console.log("Player Two wins!")
	} else {
}
}

// User Interface