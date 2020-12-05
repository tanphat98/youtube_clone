/* const start = () =>{
    let cell = document.querySelectorAll('.cell');
    
    let restart = document.querySelector('.game--restart');

    let statusDisplay = document.querySelector('.game--status');
    
    let gameActive = true;

    let currentPlayer = "X";
    
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => `Game ended in a draw!`;
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

    let gameState = ["", "", "", "", "", "", "", "", ""];

    const handleCellClick = (e) =>{
        let clickCell = e.target;

        let clickCellIndex = parseInt(clickCell.getAttribute('data-cell'))
        
        if(gameState[clickCellIndex] !== ""  || !gameActive){
            return ;
        }
        handleCellPlayer(clickCell,clickCellIndex)
        handleResultValidation();
    }
    
    const handleCellPlayer = (clickCell, clickCellIndex) =>{
        gameState[clickCellIndex] = currentPlayer;
        clickCell.innerHTML = currentPlayer;
    }


    function handlePlayerChange() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerHTML = currentPlayerTurn();
    }


    const handleRestartGame = () =>{
        gameActive = true;
        currentPlayer = "X";
        gameState = ["", "", "", "", "", "", "", "", ""];
        statusDisplay.innerHTML = currentPlayerTurn();
        document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
    }

    cell.forEach( cell => cell.addEventListener('click', handleCellClick));
    restart.addEventListener('click', handleRestartGame);

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const handleResultValidation = () => {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            statusDisplay.innerHTML = winningMessage();
            gameActive = false;
            return;
        }
        let roundDraw = !gameState.includes("");
        
        if (roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
        }
        handlePlayerChange();
    }
}

start(); */

/* 
const start =() =>{
    
    drawchest();
}

const drawchest = () =>{
    let row = 3;
    let col = 3;
    let container  = document.querySelector('.container');
    
    for(let i = 0 ; i < row ; i++){
        let divrow = document.createElement('div');
        divrow.classList.add('cell-row')
        for(let j = 0 ; j< col ; j++){
            let divcol = document.createElement('div');
            divcol.classList.add('cell');
            divcol.setAttribute('data-cell',j +i)
            divrow.append(divcol);
        }
        container.append(divrow)
    }
    let cell = document.querySelectorAll('.cell');
    let currentPlayer = "X";
    cell.forEach(cell => cell.addEventListener('click',(e)=>{
        let Cellclick = e.target;
        console.log(Cellclick)
        Cellclick.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }))
    
}
start(); */

// const getTodo = () =>{
fetch('https://my-json-server.typicode.com/typicode/phat/demo/1')
  .then(response => response.json())
  .then(json => {
      const Id = json.id;
      document.querySelector('.container').innerHTML = Id;
  })

  /* axios.get("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => console.log("response", response.data)) */
// }

// const start =() =>{
    
//     let list = getTodo();
//     console.log(getTodo())
// }
// start();