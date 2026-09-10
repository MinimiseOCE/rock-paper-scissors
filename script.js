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

console.log(getComputerChoice())

function getPlayerChoice() {
    while (4==4) {
        let answer = window.prompt("Rock, Paper or Scissors?")
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

console.log(getPlayerChoice())