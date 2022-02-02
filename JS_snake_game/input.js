let inputDirection = { x : 0, y : 0};

window.addEventListener('keyDown',e =>{
    switch (e.key) {
        case 'arrowUp' :
            inputDirection = { x : 0, y : -1 };
            break
        case 'arrowDown' :
            inputDirection = { x : 0, y : 1 };
            break
        case 'arrowLeft' :
            inputDirection = { x : -1, y : 0 };
            break
        case 'arrowRight' :
            inputDirection = { x : 1, y : 0 };
            break
        }

} )

export function getInputDirection() {
    return inputDirection;

};