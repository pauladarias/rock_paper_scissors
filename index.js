let userScoreCount = 0;
let robotScoreCount = 0;
const userScoreBoard = document.getElementById("user-score");
const robotScoreBoard = document.getElementById("robot-score");
const resultsBoard = document.getElementById("results");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getrobotChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomNumber = choices[Math.floor(Math.random() * 3)];
  // console.log(randomNumber);
  return randomNumber;
}

function game(userChoice) {
  const robotChoice = getrobotChoice();
  console.log(userChoice);
  console.log(robotChoice);

  switch (userChoice + robotChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win();
      break;
    case "RockPaper":
    case "PaperRock":
    case "ScissorsRock":
      lose();
      break;
    case "RockRock":
    case "PaperPapaer":
    case "ScissorsScissors":
      draw();
      break;
  }
}

game("Scissors");

function userInteraction() {
  rock.addEventListener("click", function () {
    game("Rock");
  });

  paper.addEventListener("click", function () {
    game("Paper");
  });

  scissors.addEventListener("click", function () {
    game("Scissors");
  });
}
