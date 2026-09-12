function getComputerChoice() {
    let answer = Math.random();

    if (answer >= 0.66) {
        return 1
    } else if (answer >= 0.33) {
        return 2
    } else {
        return 3
    }
}

function getPlayerChoice() {
    while (true) {
        setTimeout(() => {
        }, 1000);
        let answer = prompt("Rock, Paper or Scissors?")
        if (answer == 'Rock') {
            return 1
        } else if (answer == 'Paper') {
            return 2
        } else if (answer == 'Scissors') {
            return 3
        } else {
            console.log("Incorrect Answer")
        }
        }
}

function pickRock() {
    let b = getComputerChoice;
    if (b == 1) {
                console.log("You Tied")
            } else if (b == 2) {
                console.log("The Computer got a point.");
                computerScore = (computerScore + 1);
            } else {
                console.log("You got a point!");
                playerScore = (playerScore + 1);
            }
}

let playerScore = 0
let computerScore = 0

document.getElementById("rockBtn").addEventListener("click", () => {
    let result = playRound(1)
    if (result == 1) {
        playerScore = (playerScore + 1)
        if (playerScore == 3) {
            document.getElementById("score").textContent = "You win! Go again!"
            playerScore = 0
            computerScore = 0
        } else {
            document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
        }
    } else if (result == 2) {
        computerScore = (computerScore + 1)
        if (computerScore == 3) {
            document.getElementById("score").textContent = "You lost! Go again!"
            playerScore = 0
            computerScore = 0
        } else {
            document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
        }
    } else {
        document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
    }
});
document.getElementById("paperBtn").addEventListener("click", () => {
    let result = playRound(2)
    if (result == 1) {
        playerScore = (playerScore + 1)
        if (playerScore == 3) {
            document.getElementById("score").textContent = "You win! Go again!"
            playerScore = 0
            computerScore = 0
        } else {
            document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
        }
    } else if (result == 2) {
        computerScore = (computerScore + 1)
        if (computerScore == 3) {
            document.getElementById("score").textContent = "You lost! Go again!"
            playerScore = 0
            computerScore = 0
        } else {
            document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
        }
    } else {
        document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
    }
});
document.getElementById("scissorsBtn").addEventListener("click", () => {
    let result = playRound(3)
    if (result == 1) {
        playerScore = (playerScore + 1)
        if (playerScore == 3) {
            document.getElementById("score").textContent = "You win! Go again!"
            playerScore = 0
            computerScore = 0
        } else {
            document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
        }
    } else if (result == 2) {
        computerScore = (computerScore + 1)
        if (computerScore == 3) {
            document.getElementById("score").textContent = "You lost! Go again!"
            playerScore = 0
            computerScore = 0
        } else {
            document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
        }
    } else {
        document.getElementById("score").textContent = "The Score is " + playerScore + "-" + computerScore + ".";
    }
});

function playRound(playerChoice) {
    let computerChoice = getComputerChoice()
    if (playerChoice == 1) {
            if (computerChoice == 1) {
                document.getElementById("text").textContent = "You both played rock, go again!";
                return 0;
            } else if (computerChoice == 2) {
                document.getElementById("text").textContent = "The Computer played paper, they got a point!";
                console.log("The Computer got a point.");
                return 2;
            } else {
                document.getElementById("text").textContent = "The Computer played scissors, you got a point!";
                console.log("You got a point!");
                return 1;
            }
        } else if (playerChoice == 2) {
            if (computerChoice == 2) {
                document.getElementById("text").textContent = "You both played paper, go again!";
                console.log("You Tied")
                return 0;
            } else if (computerChoice == 3) {
                document.getElementById("text").textContent = "The Computer played scissors, they got a point!";
                console.log("The Computer got a point.");
                return 2
            } else {
                document.getElementById("text").textContent = "The Computer played rock, you got a point!";
                console.log("You got a point!");
                return 1
            }
        } else if (playerChoice == 3) {
            if (computerChoice == 3) {
                document.getElementById("text").textContent = "You both played scissors, go again!";
                return 0
            } else if (computerChoice == 1) {
                console.log("The Computer got a point.");
                document.getElementById("text").textContent = "The Computer played rock, they got a point!";
                return 2
            } else {
                console.log("You got a point!");
                document.getElementById("text").textContent = "The Computer played paper, you got a point!";
                return 1
            }
        }
}

function playGame(a) {
    console.log("Welcome to Rock Paper Scissors, first to three!")
    let computerScore = 0;
    let playerScore = 0;
    let gameOver = false;
    while (gameOver == false) {
        console.log("The Score is " + playerScore + " - " + computerScore)
        let b = getComputerChoice()
        if (a == 1) {
            if (b == 1) {
                console.log("You Tied")
            } else if (b == 2) {
                console.log("The Computer got a point.");
                computerScore = (computerScore + 1);
            } else {
                console.log("You got a point!");
                playerScore = (playerScore + 1);
            }
        } else if (a == 2) {
            if (b == 2) {
                console.log("You Tied")
            } else if (b == 3) {
                console.log("The Computer got a point.");
                computerScore = (computerScore + 1);
            } else {
                console.log("You got a point!");
                playerScore = (playerScore + 1);
            }
        } else if (a == 3) {
            if (b == 3) {
                console.log("You Tied")
            } else if (b == 1) {
                console.log("The Computer got a point.");
                computerScore = (computerScore + 1);
            } else {
                console.log("You got a point!");
                playerScore = (playerScore + 1);
            }
        }
        if (computerScore == 3) {
            console.log("You Lost.")
            return
        } else if (playerScore == 3) {
            console.log("You Won!")
            return
        }
    }
}

// let playAgain = true;
// while (playAgain == true) {
//     playGame()
//     let ans = prompt("Play Again? y/n")
//     if (ans != 'y') {
//         playAgain = false
//     }
// }