const prompt = require("prompt-sync")(); // Importation de prompt-sync
// Créer une fonction getComputerChoice
//Initialise les trois variables "rock”, “paper” et “scissors
//La fonction Retourne l'une des caleurs au hasard
//Créer une fonction getRandomInt afin de la reutiliser dans l'effet 'aléatoire'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
function getComputerChoice() {
  let random = getRandomInt(1, 4);
  if (random === 1) {
    return rock;
  } else if (random === 2) {
    return paper;
  } else {
    return scissors;
  }
}

function getHumanChoice() {
  let userchoice = prompt("Rock, Paper or Scissors : ");
  userchoice = userchoice.toLowerCase();
  return userchoice;
}

function playRound(humanChoice, computerChoice) {
  console.log(`
    Your Score = ${humanScore}
    Computor Score = ${computerScore}`);
  if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === paper)
  ) {
    humanScore += 1;
    console.log(`You win \nScore = ${humanScore} `);
    return humanChoice;
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie!" + `\nScore = ${humanScore}`);
    return humanChoice;
  } else {
    computerScore += 1;
    console.log(`You lose!\nScore = ${humanScore}`);
    return humanChoice;
  }
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
  //let round = playRound(humanChoice, computerChoice);
  let rounds = 0;
  console.log(`Round : ${rounds}`);
  while (rounds < 5) {
    const humanChoice = getHumanChoice(); // Nouveau choix à chaque round
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    rounds++; // Incrémentation du nombre de rounds
  }

  if (humanScore > computerScore) {
    console.log(` You win
      You : ${humanScore}
      Opps : ${computerScore} `);
  } else if (humanScore < computerScore) {
    console.log(` You lose
      You : ${humanScore}
      Opps : ${computerScore} `);
  } else {
    console.log(` Exaequo
      You : ${humanScore}
      Opps : ${computerScore} `);
  }
}

playGame();
