const Player = (sign) => {
    return {sign};
};

const gameBoard = (() => {
    const board = Array.from(document.getElementsByClassName('square'));
    const getBoard = () => console.log(board);
    return getBoard;
})();

const displayController = (() => {
    
})();

const gameController = (() => {
    const restartBtn = document.querySelector('.restart');
    restartBtn.addEventListener('click', (e) => {
        //clear board, in displayController
        //reset 1st player to x
    });

})();

gameBoard();
