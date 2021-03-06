import { update as updatedSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updatedFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'


let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game_board");

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.locaiton = '/';
        }
        return
    };
    
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    
    
    update();
    draw();

};

window.requestAnimationFrame(main);

function update() {
    updatedSnake();
    updatedFood();
    checkDeath();
};

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
};

function checkDeath () {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};