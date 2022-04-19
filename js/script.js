const options = ["rock", "paper", "scissor"];
const buttons = document.querySelectorAll("button[class^=btn]");
let computerPlay = () => {
  return options[Math.floor(Math.random() * 3)];
};

for (let i = 0; i < buttons.length; i++) {
  // counter variables
  let pcounter = document.querySelector(".pcounter");
  let ccounter = document.querySelector(".ccounter");
  // restart button
  const resetBtn = document.querySelector("#restart");
  // button options
  buttons[i].addEventListener("click", (e) => {
    const computer = computerPlay();
    const player = e.target.classList[2];
    if (player == computer) {
      document.querySelector(".message").textContent = "Draw!";
      document.querySelector(
        ".result"
      ).textContent = `You both chose ${computer}`;
    } else if (
      (player == "rock" && computer == "scissor") ||
      (player == "paper" && computer == "rock") ||
      (player == "scissor" && computer == "paper")
    ) {
      document.querySelector(".message").textContent = "You Won!";
      document.querySelector(
        ".result"
      ).textContent = `${player} beats ${computer}`;
      pcounter.textContent++;
    } else if (
      (player == "scissor" && computer == "rock") ||
      (player == "rock" && computer == "paper") ||
      (player == "paper" && computer == "scissor")
    ) {
      document.querySelector(".message").textContent = "You lose!";
      document.querySelector(
        ".result"
      ).textContent = `${computer} beats ${player}`;
      ccounter.textContent++;
    }
    // winning cases
    if (pcounter.textContent == 3) {
      document.querySelector(".message").textContent = "You Won This Game!";
      document.querySelector(
        ".result"
      ).textContent = `With Score: ${pcounter.textContent} - ${ccounter.textContent}, Click Restart To Play Again!`;
    } else if (ccounter.textContent == 3) {
      document.querySelector(".message").textContent = "You Lost This Game!";
      document.querySelector(
        ".result"
      ).textContent = `With Score: ${pcounter.textContent} - ${ccounter.textContent}, Click Restart To Play Again!`;
    }
  });
  // restart Logic
  resetBtn.addEventListener("click", () => {
    pcounter.textContent = "0";
    ccounter.textContent = "0";
    document.querySelector(".message").textContent = "";
    document.querySelector(".result").textContent = "";
  });
}

// else if (
//     (playerSelection == "rock" && computerSelection == "scissor") ||
//     (playerSelection == "paper" && computerSelection == "rock") ||
//     (playerSelection == "scissor" && computerSelection == "paper")
//   ) {
//     return (result = `You Won! ${playerSelection} beats ${computerSelection}`);
//   } else if (
//     (playerSelection == "scissor" && computerSelection == "rock") ||
//     (playerSelection == "rock" && computerSelection == "paper") ||
//     (playerSelection == "paper" && computerSelection == "scissor")
//   ) {
//     return (result = `You Lose! ${computerSelection} beats ${playerSelection}`);
//   } else {
//     return (result = alert("Enter a valid input."));
//   }
// };

// // Game of 5 Rounds
// function game(fiveRound) {
//   // counter variables
//   let ccounter = 0;
//   // loop to iterate a function through the loop(5 Times)
//   for (let i = 1; i < 5; i++) {
//     const playerSelection = prompt("choose one rock, paper or scissor?", "");
//     const computerSelection = computerPlay();
//     let result = fiveRound(playerSelection, computerSelection);
//     console.log(result);
//     if (result.includes("Won")) {
//       pcounter++;
//     } else if (result.includes("Lose")) {
//       ccounter++;
//     } else {
//       pcounter;
//       ccounter;
//     }
//   }
//   // counter Logic
//   if (pcounter > ccounter) {
//     console.log(`You Won This Game With Score: ${pcounter} - ${ccounter}`);
//   } else if (pcounter < ccounter) {
//     console.log(`Computer Won This Game With Score: ${pcounter} - ${ccounter}`);
//   } else {
//     console.log(
//       `It's a Tie, Both Scored ${pcounter} - ${ccounter}, Restart The Game `
//     );
//   }
// }

// console.log(computerPlay());
// */
