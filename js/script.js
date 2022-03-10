// // variable for generating rounds


// function for generating couputer side input

let computerPlays = () => {
    let option = ["rock", "paper" , "scissor"];
    return option[Math.floor(Math.random()*3)];
}

// function to generate player side input

let playerSelection = () => {
    userInput = prompt("Enter one of these rock,paper or scissor"," ");
    return userInput;
}

// assigned these functions into vairables

let computerPlayed = computerPlays();
let playerPlays = playerSelection();

// created a function which generates a single round game

let playRound = (playerPlays, computerPlayed) => {
    if ( playerPlays == computerPlayed ){
        return `That's a Draw! you both choose ${computerPlayed}`;
    } else if ((playerPlays == "rock" && computerPlayed == "scissor") || (playerPlays == "paper" && computerPlayed == "rock") || (playerPlays == "scissor" && computerPlayed == "paper")) {
        return `You Won! ${playerPlays} beats ${computerPlayed}`;
    } else if ((playerPlays == "scissor" && computerPlayed == "rock") || (playerPlays == "rock" && computerPlayed == "paper") || (playerPlays == "paper" && computerPlayed == "scissor")) {
        return `You lose! ${computerPlayed} beats ${playerPlays}`;
    } else {
        return alert("Enter a valid input.")
    }
}

game(playRound(playerPlays, computerPlayed));