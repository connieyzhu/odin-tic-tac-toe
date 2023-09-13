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

    const reset = () => {
        for(i = 0; i < gameBoard().length; i++){
            gameBoard()[i].textContent = '';
        }
    }

    return {setMessage, getGrid, reset};
})();

const gameController = (() => {
    const playerX = Player('X');
    const playerO = Player('O');
    let round = 1;
    let isOver = false;

    const getCurrentPlayerSign = () => {
        return round % 2 == 1 ? playerX.getSign() : playerO.getSign();
    }

    const playRound = () => {
        if(checkWin()){
            displayController.setMessage(`Player ${getCurrentPlayerSign()} Wins!`)
            isOver = true;
        }else if(round == 9){
            displayController.setMessage('Draw');
        }else{
            round++;
            displayController.setMessage(`Player ${getCurrentPlayerSign()}'s Turn`);
        }
    }

    const checkWin = () => {
        const winPossibilities = [
            [1, 2, 3],
            [1, 4, 7],
            [1, 5, 9],
            [2, 5, 8],
            [3, 5, 7],
            [3, 6, 9],
            [4, 5, 6],
            [7, 8, 9]
        ];

        const checkSame = (arr) => {
            const element = (index) => {
                return gameBoard()[arr[index] - 1].textContent;
            }

            return (element(0) === element(1) && element(1) === element(2) &&
                (element(0) === 'X' || element(0) === 'O'))
        };

        for(i = 0; i < winPossibilities.length; i++){
            if(checkSame(winPossibilities[i])){
                return true;
            }
        }

        return false;
    };

    displayController.getGrid().addEventListener('click', (e) => {
        if(e.target.textContent != '' || isOver){
            return
        }else{
            e.target.textContent = getCurrentPlayerSign();
            playRound();
        }
    });

    const restartBtn = document.querySelector('.restart');
    restartBtn.addEventListener('click', (e) => {
        displayController.reset();
        isOver = false;
        round = 1;
        displayController.setMessage(`Player ${getCurrentPlayerSign()}'s Turn`);
    });
    
    return playRound;

})();
