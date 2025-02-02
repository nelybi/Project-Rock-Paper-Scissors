const prompt = require("prompt-sync")(); // Importation de prompt-sync

// Génère un nombre aléatoire entre min et max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// Choix aléatoire de l'ordinateur
function getComputerChoice() {
  const random = getRandomInt(1, 4);
  if (random === 1) return rock;
  if (random === 2) return paper;
  return scissors;
}

// Saisie de l'utilisateur avec validation
function getHumanChoice() {
  let userchoice;
  do {
    userchoice = prompt("Rock, Paper or Scissors: ").toLowerCase();
  } while (
    userchoice !== "rock" &&
    userchoice !== "paper" &&
    userchoice !== "scissors"
  );
  return userchoice;
}

let humanScore = 0;
let computerScore = 0;

// Logique d'un round
function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === paper)
  ) {
    humanScore += 1;
    console.log("✅ You win this round!");
  } else if (humanChoice === computerChoice) {
    console.log("🤝 It's a tie!");
  } else {
    computerScore += 1;
    console.log("❌ You lose this round!");
  }

  console.log(`Current Score:
  You: ${humanScore}
  Computer: ${computerScore}`);
}

// Logique du jeu (5 rounds)
function playGame() {
  let rounds = 0;
  while (rounds < 5) {
    console.log(`\n--- Round ${rounds + 1} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    rounds++;
  }

  console.log("\n=== Final Results ===");
  if (humanScore > computerScore) {
    console.log(`🎉 You win the game!
    Final Score: You: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`😢 You lose the game!
    Final Score: You: ${humanScore}, Computer: ${computerScore}`);
  } else {
    console.log(`🤝 It's a tie!
    Final Score: You: ${humanScore}, Computer: ${computerScore}`);
  }
}

playGame();
