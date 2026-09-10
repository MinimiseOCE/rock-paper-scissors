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

}