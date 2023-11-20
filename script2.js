const array = ["rock", "paper", "scissors"];

function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const computerSelection = getComputerChoice(array);
console.log(`Computer chose: ${computerSelection}`);

let playerSelection = prompt(
  "Please enter your choice: Rock, Paper, or Scissors"
).toLowerCase();

let playerWins = 0;
let computerWins = 0;

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("DRAW");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("Player wins this round!");
    playerWins++;
  } else {
    console.log("Computer wins this round!");
    computerWins++;
  }
};

playRound(playerSelection, computerSelection);

// Display the updated scores after each round
console.log(`Computer Wins: ${computerWins}, Player Wins: ${playerWins}`);
