let music = new Audio("ding-101492.mp3");
let winSound = new Audio("su.mp3");
let turn = "X";                           // Define the turn variable
let gameOver = false;                    // Fixed spelling of gameOver

// Function to change turn
const changeTurn = () => {
    turn = turn === "X" ? "O" : "X";
    return turn;
}

// Function to check win
const checkWin = () => {
    const winningCombinations = [           // Renamed variable for clarity
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if (boxText[a].innerText === boxText[b].innerText &&
            boxText[b].innerText === boxText[c].innerText &&
            boxText[a].innerText !== '') {
            document.querySelector(".info").innerText =        
               boxText[a].innerText + " Won";               // boxText= X/O so == X/O + Won 
            winSound.play();                        // Play win sound
            gameOver = true;                        // Set gameOver to true
            document.getElementsByTagName('img')[0].style.width="150px"
        }
    });
}

// Game logic
const boxes = document.getElementsByClassName("box");
const boxText = Array.from(boxes).map(element => element.querySelector('.boxText'));

Array.from(boxes).forEach((element, index) => {
    element.addEventListener('click', () => {
        if (boxText[index].innerText === '' && !gameOver) {   // Check gameOver state
            boxText[index].innerText = turn;
            changeTurn();
            music.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});


// Add onClick lisner to reset v=button
Reset.addEventListener('click', () => {
    let boxTexts=document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach (element => {
      element.innerText=""
    })
    turn="X";
    gameOver=false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementsByTagName("img")[0].style.width="0px"
}
)