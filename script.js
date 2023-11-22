"use strict";

// Computer choice

const array = ["rock", "paper", "scissors"];

function getComputerChoice(arr) {
  //  get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  //get random item
  const item = arr[randomIndex];
  return item;
}
const computerSelection = getComputerChoice(array);
console.log(computerSelection);

//get user input times 5

let playerSelection = prompt(
  "Please enter your choice: Rock, Paper or Scissors"
).toLowerCase();

const playerSelection2 = prompt(
  "Please enter your choice: Rock, Paper or Scissors"
).toLowerCase();

const playerSelection3 = prompt(
  "Please enter your choice: Rock, Paper or Scissors"
).toLowerCase();

const playerSelection4 = prompt(
  "Please enter your choice: Rock, Paper or Scissors"
).toLowerCase();

const playerSelection5 = prompt(
  "Please enter your choice: Rock, Paper or Scissors"
).toLowerCase();

// define winning conditions

let playerWins = 0;
let computerWins = 0;

console.log(computerWins);
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

// Play 5 rounds

playRound(playerSelection, computerSelection);
console.log(`${computerWins}, ${playerWins}`);
function game(playerSelection, computerSelection) {
  playRound(playerSelection, computerSelection);
  playerSelection = playerSelection2;
  playRound(playerSelection, computerSelection);
  playerSelection = playerSelection3;
  playRound(playerSelection, computerSelection);
  playerSelection = playerSelection4;
  playRound(playerSelection, computerSelection);
  playerSelection = playerSelection5;
  playRound(playerSelection, computerSelection);
  return;
}
game(playerSelection, computerSelection);

//determine Winner

if (playerWins > computerWins) {
  console.log(`You win ${playerWins} to ${computerWins}`);
} else {
  console.log(`Computer wins ${computerWins} : ${playerWins}`);
}
