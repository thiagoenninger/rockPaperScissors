function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * options.length);
  return randomOption = options[random];
}

function getPlayerSelection() {
  let playerSelection = prompt("Choose one between Rock, Paper or Scissors: ")
  return playerSelection
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!")
  } else if (playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You Lose! " + computerSelection + " beats " + playerSelection + ".")
  } else {
    console.log("Congratulations! " + playerSelection + " beats " + computerSelection + ".")
  }
};

function game() {
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection );
  playRound(playerSelection, computerSelection );
  playRound(playerSelection, computerSelection );
  playRound(playerSelection, computerSelection );
  playRound(playerSelection, computerSelection );
}

console.log(game());


