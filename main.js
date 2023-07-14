function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"]
  let random = Math.floor((Math.random() * options.length))
  let randomOption = options[random]
  return randomOption
}