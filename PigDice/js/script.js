// Buisness Logic

function rollDice(){
  return Math.floor(Math.random() *(13 - 1) + 1);
}
function Game(player1, player2){
  this.firstPlayer =  player1;
  this.secondPlayer = player2;
  this.activePlayer= 1;
}

function playerName(name) {
  this.playerName = name;
  this.score = 0;
  this.gameScore = 0;
}

const game = new Game(new playerName('player1'), new playerName('player2'));

function changeScore(){
  console.log("Changing score, Player One: " + game.firstPlayer.turnScore + " player Two: " + game.secondPlayer.turnScore);
  p1TurnDisplay = game.firstPlayer.turnScore;
  p2TurnDisplay = game.secondPlayer.turnScore;
}

Player.prototype.rollDice = function(){ 
	const roll = rollDice();
	console.log("Roll " + roll);
	if (roll === 1) {
    this.turnScore = 0;
    console.log("Player rolled 1");
		game.changeTurn(true)
		changeScore();
	}	else {
		this.turnScore += roll;
    console.log("Turn score: " + this.turnScore);
		changeScore();
	}
}

Player.prototype.holdScore = function(){
  this.gameScore += this.turnScore;
	this.turnScore = 0
  console.log("Game score: " + this.gameScore);
  game.changeTurn(true)
	changeScore();
}

// User Interface