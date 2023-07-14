const optionsArray = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
  return optionsArray[~~(Math.random() * optionsArray.length)]
}

function playRound(playerSelection, computerSelection) {
  let computerScore = 0
  let playerScore = 0

  for(let i = 0; i < 5; i++){
    computerSelection = getComputerChoice().toLowerCase()
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase()

    console.log(`Computer select: ${computerSelection}`)
    console.log(`Player select: ${playerSelection}`)

    if(computerSelection == playerSelection){
      console.log("It's a tie!")
    } else if(
      (computerSelection == "rock" && playerSelection == "scissors") ||
      (computerSelection == "scissors" && playerSelection == "paper") ||
      (computerSelection == "paper" && playerSelection == "rock")
    ) {
      computerScore++
      console.log(`You lost this round! The score is: computer ${computerScore} x player ${playerScore}`)
    } else if(
      (computerSelection == "rock" && playerSelection == "paper") ||
      (computerSelection == "paper" && playerSelection == "scissors") ||
      (computerSelection == "scissors" && playerSelection == "rock")
    ){
      playerScore++
      console.log(`You won this round! The score is: computer ${computerScore} x player ${playerScore}`)
    }
    console.log("--------------------------")
  }
  if(playerScore > computerScore){
    console.log("Congratulations on winning the game!")
  } else if(playerScore < computerScore) {
    console.log("Sorry for your loss, better luck next time!")
  } else {
    console.log("The game ended in a tie!")
  }
}