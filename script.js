const Player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    };
    return {getSign};
};

const gameBoard = (() => {
    const board = Array.from(document.getElementsByClassName('square'));
    const getBoard = () => {
        return board;
    };
    return getBoard;
})();

const displayController = (() => {
    const message = document.querySelector('.gameStatus');
    const grid = document.querySelector('.grid');

    const setMessage = (newMessage) => {
        message.textContent = newMessage;
    }

    const getGrid = () => {
        return grid;
    }

    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#E3D7FF';
    });

    grid.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = 'white';
    });

    return {setMessage, getGrid};
})();

const gameController = (() => {
    const playerX = Player('X');
    const playerO = Player('O');
    let round = 1;

    const getCurrentPlayerSign = () => {
        return round % 2 == 1 ? playerX.getSign() : playerO.getSign();
    }

    const playRound = () => {
        round++;
        checkWin();
        displayController.setMessage(`Player ${getCurrentPlayerSign()}'s Turn`);
    }

    const checkWin = () => {

    }

    displayController.getGrid().addEventListener('click', (e) => {
        e.target.textContent = getCurrentPlayerSign();
        playRound();
        console.log(gameBoard());
    });

    const restartBtn = document.querySelector('.restart');
    restartBtn.addEventListener('click', (e) => {
        //clear board, in displayController
        //reset 1st player to x
    });

    const dummy = () => console.log('hi');
    return dummy;

})();


gameController();
