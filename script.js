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

function playGame() {
    console.log("Welcome to Rock Paper Scissors, first to three!")
    let computerScore = 0;
    let playerScore = 0;
    let gameOver = false;
    while (gameOver == false) {
        console.log("The Score is " + playerScore + " - " + computerScore)
        let a = getPlayerChoice()
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