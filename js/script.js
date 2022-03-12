let computerPlay = () => {
  let options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
};

let playRound = (playerSelection, computerSelection) => {
  let result;
  if (playerSelection == computerSelection) {
    return (result = `That's a Draw! you both chose ${playerSelection}`);
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return (result = `You Won! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (playerSelection == "scissor" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissor")
  ) {
    return (result = `You Lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    return (result = alert("Enter a valid input."));
  }
};

function game(fiveRound) {
  let pcounter = 0;
  let ccounter = 0;
  for (let i = 1; i < 5; i++) {
    const playerSelection = prompt("choose one rock, paper or scissor?", "");
    const computerSelection = computerPlay();
    let result = fiveRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("Won")) {
      pcounter++;
    } else if (result.includes("Lose")) {
      ccounter++;
    } else {
      pcounter;
      ccounter;
    }
  }
  if (pcounter > ccounter) {
    console.log(`You Won This Game With Score: ${pcounter} - ${ccounter}`);
  } else if (pcounter < ccounter) {
    console.log(`Computer Won This Game With Score: ${pcounter} - ${ccounter}`);
  } else {
    console.log(
      `It's a Tie, Both Scored ${pcounter} - ${ccounter}, Restart The Game `
    );
  }
}

game(playRound);
