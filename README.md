<h1 align="center">JavaScript Games</h1>
<h2 align="center">
    <img src="assets/gamepad.png" height="300px" width="310;ppx">
</h2>

- ### 🚥 Connect [![Let's go](https://img.shields.io/badge/Code-%F0%9F%8E%AE-brightgreen)](https://github.com/amirtha4501/JavaScriptGames/tree/master/Connect)
- ### 🧠 Memory Game [![Let's go](https://img.shields.io/badge/Code-%F0%9F%8E%AE-brightgreen)](https://github.com/amirtha4501/JavaScriptGames/tree/master/MemoryGame)
- ### 🐍 Snake Game [![Let's go](https://img.shields.io/badge/Code-%F0%9F%8E%AE-brightgreen)](https://github.com/amirtha4501/JavaScriptGames/tree/master/SnakeGame)
- ### ✈️ Space Invaders [![Let's go](https://img.shields.io/badge/Code-%F0%9F%8E%AE-brightgreen)](https://github.com/amirtha4501/JavaScriptGames/tree/master/SpaceInvaders)
- ### 🐭 Whac A Mole [![Let's go](https://img.shields.io/badge/Code-%F0%9F%8E%AE-brightgreen)](https://github.com/amirtha4501/JavaScriptGames/tree/master/WhacAMole)

## 🧾 Description
- ### Connect
        It's a two-player connection board game, in which the players take turns dropping colored discs into a seven-column, six-row vertically suspended grid. 
        The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.
- ### Memory Game
        A game that improve the memory and brain power. The thing is to match between each couple of images.
- ### Snake Game
        A  game in which a snake needs to explore an environment and catch the fruit without hitting any obstacle or itself. 
        Every time the snake catches a fruit, its size increases.
- ### Space Invaders
        It is a fixed shooter in which the player controls a laser cannon by moving it horizontally across the bottom of the screen and firing at descending aliens.
- ### Whac A Mole
        A game which involves quickly and repeatedly hitting the heads of moles with a pointer as they pop up from the holes.

## 🧱 Tech
- HTML
- CSS
- JavaScript

## 💻 Setup
- Clone the repository

    ` git clone https://github.com/amirtha4501/JavaScriptGames.git `
- Boot up a terminal on the directory.
- Run the website on localhost

    `http-server -1`

## 🤔 How to play
### - Connect
- The board is empty🗌 at the start of the game. 
- The aim for both players is to make a straight line⬇️ of four own pieces.
- The line can be vertical⬆️, horizontal➡️ or diagonal↘️. 
- Before starting, players decide randomly which of them will be the beginner🎲.
- Moves are made alternatively, one by turn.
- The game is over if four of the same colour is connected and the player who owns that colour is the winner🏆.
### - Memory Game
- Initially, there will be 12 cards.
- Turn over🔄 any of the cards.
- Remember💡 what was on each card and where it was.
- If you couple the card's image with it's pair, the score will be incremented⏫.
- The game is over when all the cards have been matched💯.
### - Snake Game
- Press the arrow key↘️.
- Control the 🐍snake using the arrow keys.
- Use the up arrow⬆️ to move up, down arrow⬇️ to move down, left arrow⬅️ to turn left and the right arrow➡️ to turn right.
- Chase down the apples🍎.
- Play until your snake hits ⚕️itself.
### - Space Invaders
- Initially, the aliens👽 will be at the top of the game space.
- The shooter✈️ is fixed at the base and it is horizontally movable.
- Move🕹️ the shooter to shoot the descending aliens with the laser.
- Press spacebar to shoot🔥.
- Press left⬅️ and right➡️ arrows to move the shooter accordingly.
- The game is over🥴 if the aliens reached the land.
### - Whac A Mole
- A mole🐭 will pop up from the boxes.
- You've 60 seconds of time⏰ to show your nimbleness.
- You have to quickly and repeatedly click the heads of moles.
- The game is over, after a minute⏳.

## 🧐 What's the outcome
- ### Connect
    - querySelector()
    - addEventListener()
    - onclick
    - classList.contains()
    - classList.add()
    - For loops
    - Arrow functions
- ### Memory Game
    - push()
    - querySelector()
    - setAttribute()
    - getAttribute()
    - createElement()
    - appendChild()
    - Math.random()
    - sort()
    - For loops
- ### Snake Game
    - querySelector()
    - addEventListener()
    - setInterval()
    - keyCodes()
    - pop()
    - unshift()
    - push()
    - classList.contains()
    - classList.add()
    - classList.remove()
- ### Space Invaders
    - querySelector()
    - addEventListener()
    - Switch cases
    - keyCodes
    - indexOf()
    - includes()
    - classList
    - setInterval()
    - clearInterval()
    - push()
- ### Whac A Mole
    - querySelector()
    - addEventListener()
    - setInterval()
    - classList()
    - forEach()
    - Arrow functions

## 📁 Project Structure

    ├───assets
    └───Connect
        └───images
        └───connect.css
        └───connect.html
        └───connect.js
    └───MemoryGame
        └───images
        └───memory-game.css
        └───memory-game.html
        └───memory-game.js
    └───SnakeGame
        └───images
        └───snake.css
        └───snake.html
        └───snake.js
    └───SpaceInvaders
        └───images
        └───space-invaders.css
        └───space-invaders.html
        └───space-invaders.js
    └───WhacAMole
        └───images
        └───whac.css
        └───whac.html
        └───whac.js
