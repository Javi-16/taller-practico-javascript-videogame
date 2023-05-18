const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

let canvasSize;
let elementsSize;

const playerPosition = {
    x: undefined,
    y: undefined
};

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    }
    else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;
    
    console.log({canvasSize, elementsSize});

    startGame();
}

function startGame() {
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = 'end';

    const map = maps[2];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    game.clearRect(0, 0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colIndex + 1) + 12;
            const posY = elementsSize * (rowIndex + 1) - 8;

            if (col === 'O') {
                if (!playerPosition.x && !playerPosition.y) {
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                }
            }

            game.fillText(emoji, posX, posY);
        });
    });

    movePlayer();

    // for (let row = 1; row <= 10; row++) {
    //     for (let col = 1; col <= 10; col++) {
    //         game.fillText(emojis[mapRowCols[row - 1][col - 1]], elementsSize * col + 12, elementsSize * row - 8);
    //     }
    // }
}

function movePlayer() {
    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

window.addEventListener('keyup', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveByKeys(event) {
    const tecla = event.key;

    switch (tecla) {
        case 'ArrowUp':
            moveUp();
            break;

        case 'ArrowLeft':
            moveLeft();
            break;

        case 'ArrowRight':
            moveRight();
            break;

        case 'ArrowDown':
            moveDown();
            break;

        default:
            break;
    }
}

function moveUp() {
    console.log('Me quiero mover hacia arriba');

    if ((playerPosition.y - elementsSize) < 0) {
        console.log('OUT');
    }
    else {
        playerPosition.y -= elementsSize;
        startGame();
    }
}

function moveLeft() {
    console.log('Me quiero mover hacia la izquierda');

    if ((playerPosition.x - elementsSize) < elementsSize) {
        console.log('OUT');
    }
    else {
        playerPosition.x -= elementsSize;
        startGame();
    }
}

function moveRight() {
    console.log('Me quiero mover hacia derecha');

    if ((playerPosition.x + elementsSize) > (canvasSize + 12)) {
        console.log('OUT');
    } else {
        playerPosition.x += elementsSize;
        startGame();
    }
    }

function moveDown() {
    console.log('Me quiero mover hacia abajo');
    if ((playerPosition.y + elementsSize) > (canvasSize - 8)) {
        console.log('OUT');
    }
    else {
        playerPosition.y += elementsSize;
        startGame();
    }
}
