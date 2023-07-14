function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * options.length);
  return randomOption = options[random];
}

function playGame() {
  let playerSelection = prompt("Choose one between Rock, Paper or Scissors: ");
  let computerChoice = getComputerChoice();
  console.log("Computer choose: " + computerChoice)

  if(playerSelection === computerChoice){
    console.log("It's a tie!")
  } else if (playerSelection === "Paper" && computerChoice === "Scissors" || playerSelection === "Scissors" && computerChoice==="Rock" || playerSelection==="Rock" && computerChoice==="Paper") {
      console.log("You Lose! " + computerChoice + " beats " + playerSelection + ".")
  } else {
    console.log("Congratulations! " + playerSelection + " beats " + computerChoice + ".")
  }
} 