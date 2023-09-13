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

})();

gameBoard();