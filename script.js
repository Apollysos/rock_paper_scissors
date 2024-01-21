"use strict";

// Computer choice

const array = ["rock", "paper", "scissors"];

let computerSelection;

function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Player choice

let playerSelection;

const btnRock = document.querySelector("#btnRock");
btnRock.textContent = "Rock";

btnRock.addEventListener("click", () => {
  playerSelection = "rock";
  playRound();
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.textContent = "Paper";
btnPaper.addEventListener("click", () => {
  playerSelection = "paper";
  playRound();
});

const btnScissor = document.querySelector("#btnScissors");
btnScissor.textContent = "Scissors";
btnScissor.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound();
});

let playerWins = 0;
let computerWins = 0;

// Create a result container div dynamically
const resultContainer = document.createElement("div");
resultContainer.id = "resultContainer";
document.body.appendChild(resultContainer);

const playerChoice = document.createElement("p");
resultContainer.appendChild(playerChoice);

// Create a single paragraph for displaying results
const resultParagraph = document.createElement("p");
resultContainer.appendChild(resultParagraph);

function playRound() {
  if (playerWins === 5 || computerWins === 5) {
    endGame();
    return;
  }

  computerSelection = getComputerChoice(array);

  // Update computer's choice content
  resultParagraph.textContent = `Computer chose: ${computerSelection}`;
  resultParagraph.style.cssText = "text-align:center";

  if (playerSelection === computerSelection) {
    updateResult("DRAW");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    updateResult("You win this round!");
    playerWins++;
  } else {
    updateResult("Computer wins this round!");
    computerWins++;
  }

  determineWinner();
}

function updateResult(message) {
  // Update the content of the result paragraph
  resultParagraph.textContent += `\n${message}`;
  playerChoice.textContent = `You chose :\n${playerSelection}`;
  playerChoice.style.cssText = "text-align:center";
}
let roundWinner = document.createElement("p");
resultContainer.appendChild(roundWinner);
function determineWinner() {
  // Update the content of the result paragraph with the overall winner message
  if (playerWins === 5 || computerWins === 5) {
    endGame();
    return;
  }

  roundWinner.textContent = `Score: You ${playerWins} - ${computerWins} Computer`;
  roundWinner.style.cssText = "text-align:center";
}

function endGame() {
  // Disable buttons and display final result
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissor.disabled = true;
  roundWinner.textContent = "";
  playerChoice.textContent = "";
  resultParagraph.textContent = "";
  let finalScore = document.querySelector("#finalScore");
  resultContainer.appendChild(finalScore);
  //resultContainer.appendChild(finalScore);

  if (playerWins > computerWins) {
    finalScore.textContent = `Congratulations: You won! Fincal Score: ${playerWins} to ${computerWins}!`;
    finalScore.style.cssText =
      "text-align:center; font-size: 18px; font-weight: bold";
  } else if (playerWins === computerWins) {
    finalScore.textContent += `\nDraw! The final score is ${playerWins} to ${computerWins}`;
  } else {
    finalScore.textContent += `\nNooo! Computer wins: ${computerWins} : ${playerWins}!`;
    finalScore.style.cssText =
      "text-align:center; font-size: 18px; font-weight: bold";
  }
}
