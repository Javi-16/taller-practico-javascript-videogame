const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame)

function startGame() {
    let canvasSize;

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.6;
    }
    else {
        canvasSize = window.innerHeight * 0.6;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = canvasSize / 10;

    console.log({canvasSize, elementsSize});

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';
    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis.X, i * elementsSize, elementsSize);
    }

    // canvas.setAttribute('width', window.innerWidth * 0.75);
    // canvas.setAttribute('height', window.innerHeight * 0.5);

    // game.fillRect(0, 0, 100, 100);
    // game.clearRect(0, 0, 50, 50);
    
    // game.font = '24px Verdana';
    // game.fillStyle = 'purple';
    // game.textAlign = 'start';
    // game.fillText('Platzi', 25, 25);
}
