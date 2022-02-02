import { getInputDirection } from "./input.js";


export const SNAKE_SPEED = 3;
const SNAKE_BODY = [{x : 11, y : 11}];
let newSegments = 0;


export function update () {
    const inputDirection =  getInputDirection();
    for (let i = SNAKE_BODY.length - 2; i >= 0; i--) {
        SNAKE_BODY[i + 1] = {...SNAKE_BODY[i] };
    };
    
    SNAKE_BODY[0].x += inputDirection.x;
    SNAKE_BODY[0].y += inputDirection.y;
};


export function draw (gameBoard) {
    SNAKE_BODY.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendchild(snakeElement);
    });
};