// Randomly returns either rock, paper or scissors
let getComputerChoice = () => {
    let choices = ['Rock', 'Paper', 'Scissors']
    let randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

// Capitalizes a string
let ignoreCase = (str) => {
    newStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    return newStr
}


let playRound = (playerSelection, computerSelection) => {
    let capitalizedPlayerSelection = ignoreCase(playerSelection)
    let roundMessage = ''

    // Conditionals to determine who wins the round
    if(capitalizedPlayerSelection == 'Rock' && computerSelection == 'Paper'){
        roundMessage = 'You Loose! Paper beats Rock'
    }
    else if(capitalizedPlayerSelection == 'Paper' && computerSelection == 'Rock'){
        roundMessage = 'You Win! Paper beats Rock'
    }
    else if(capitalizedPlayerSelection == 'Rock' && computerSelection == 'Scissors'){
        roundMessage = 'You Win! Rock beats Scissors'
    }
    else if(capitalizedPlayerSelection == 'Scissors' && computerSelection == 'Rock'){
        roundMessage = 'You Loose! Rock beats Scissors'
    }
    else if(capitalizedPlayerSelection == 'Scissors' && computerSelection == 'Paper'){
        roundMessage = 'You Win! Scissors beats Paper'
    }
    else if(capitalizedPlayerSelection == 'Paper' && computerSelection == 'Scissors'){
        roundMessage = 'You Loose! Scissors beats Paper'
    }
    else if(capitalizedPlayerSelection == computerSelection){
        roundMessage = 'It\'s a tie'
    }

    console.log(`Player: ${capitalizedPlayerSelection}`)
    console.log(`Computer: ${computerSelection}`)

    return roundMessage
}