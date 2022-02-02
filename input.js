let inputDirection = { x : 0, y : 0};

window.addEventListener('keyDown',e =>{
    switch (e.key) {
        case 'arrowUp' :
            if (lastInputDirection.y !== 0) break
            inputDirection = { x : 0, y : -1 };
            break
        case 'arrowDown' :
            if (lastInputDirection.y !== 0) break
            inputDirection = { x : 0, y : 1 };
            break
        case 'arrowLeft' :
            if (lastInputDirection.x !== 0) break
            inputDirection = { x : -1, y : 0 };
            break
        case 'arrowRight' :
            if (lastInputDirection.x !== 0) break
            inputDirection = { x : 1, y : 0 };
            break
        }

} )

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;

};