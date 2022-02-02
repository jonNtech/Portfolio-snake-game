import { update as updatedSnake, draw as drawSnake, SNAKE_SPEED, update, draw } from "./snake.js"


let lastRenderTime = 0;
const gameBoard = document.getElementById("game_board");

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    
    
    updateNow();
    draw();

}

window.requestAnimationFrame(main);

function updateNow() {
    updatedSnake();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}
