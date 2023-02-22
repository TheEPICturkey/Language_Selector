# _Mr Roboger's Neighborhood_

#### By _Brandon Spear_ _and _Matthew Melito_

#### _This is a fun game of randomly rolled numbers. First to get to 100 witrhout going over wins!._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_On this webpage, a user will be prompted to input a number of their choosing. Upon entering a number, it will count up to their number by increments of one. Along the way, it will replace any number that includes the numbers 1, 2, or 3. Numbers including 1's will be replaced with 'beep', 2's will be replaced with 'boop', and 3's replaced with 'Won't you be my neighbor?'. The heirarchy here is 3, 2, then 1. So the number 13 for example would display as 'Won't you be my neighbor?', and won't show 'beep'. For the number 123, it will still only display 'Won't you be my neighbor?' in it's place as it takes precedence over the others._

## Setup/Installation Requirements

* _Clone from GitHub at: ._
* _Navigate to the folder_
* _Double click index.html to open a locally hosted instance_
* _Enter a number to see how it works_
* _TO EDIT: Open folder using text editor of your choice_

## TESTS


* _Describe: player;_
Test 1: "It will return player name and score."
Code: players;
Expected: Player {playerName: 'PlayerOne', turnScore: 0, gameScore: 0} 
Player {playerName: 'CPU', turnScore: 0, gameScore: 0}


* _Describe: activePlayer();_

Test 1: "It will set active player to player1"
Code : let activePlayer = player1;
Expected:  Player {playerName: 'PlayerOne', turnScore: 0, gameScore: 0}


* _Describe: rollDice();_

Test 1: "It will randomize a number between one and twelve and return that value and add to previous roll."
Code : rollDice();
Expected: 5


*_Describe: holdScore_
Test 1: "It will hold players rolled score."
Code: Player.prototype.holdScore
Expected: 5
 

*_Describe: changeTurn()_
Test 1: "It will change activePlayer to other player"
Code: 
changeTurn(true);
activePlayer;
Expected: Player {playerName: 'CPU', turnScore: 0, gameScore: 0}


## Known Bugs

* _No known bugs_

## License

MIT

_If you have any questions or issues, head over to this projects GitHub Repository, and navigate to the "Issues" tab to leave feedback! If you have any suggestions or would like to contribute to this project, reach out and let me know!_

Copyright (c) _02/19/23_ _Brandon Spear_ _Matthew Melito_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.