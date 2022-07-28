// Randomly returns either rock, paper or scissors
let getComputerChoice = () => {
    choices = ['Rock', 'Paper', 'Scissors']
    randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

