const Player = (sign) => {
    this.sign = sign;
    const getSign = (sign) => {
        return sign;
    }
    return {getSign};
};

const gameBoard = (() => {
    const board = Array.from(document.getElementsByClassName('square'));
    const getBoard = () => console.log(board);
    return getBoard;
})();

const displayController = (() => {
    const message = () => console.log('testDisplay');

    const grid = document.querySelector('.grid');
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#E3D7FF';
    });

    grid.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = 'white';
    });

    return message;
})();

const gameController = (() => {
    const playerX = Player('X');
    const playerY = Player('Y');

    const restartBtn = document.querySelector('.restart');
    restartBtn.addEventListener('click', (e) => {
        //clear board, in displayController
        //reset 1st player to x
    });

})();

displayController();
gameBoard();
