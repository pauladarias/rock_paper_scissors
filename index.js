let userScoreCount = 0;
let robotScoreCount = 0;
const userScoreBoard = document.getElementById("user-score");
const robotScoreBoard = document.getElementById("robot-score");
const resultsBoard = document.getElementById("result-board");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getrobotChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randomNumber = choices[Math.floor(Math.random() * 3)];
  return randomNumber;
}

function win(userChoice, robotChoice) {
  userScoreCount++;
  userScoreBoard.innerHTML = userScoreCount;
  robotScoreBoard.innerHTML = robotScoreCount;
  resultsBoard.innerText = userChoice + " beats " + robotChoice + ". You Win!";
}

function lose(userChoice, robotChoice) {
  robotScoreCount++;
  userScoreBoard.innerHTML = userScoreCount;
  robotScoreBoard.innerHTML = robotScoreCount;
  resultsBoard.innerText =
    userChoice + " loses to " + robotChoice + ". You Lose!";
}

function draw(userChoice, robotChoice) {
  resultsBoard.innerText =
    userChoice + " equals " + robotChoice + ". It's a draw!";
}

function game(userChoice) {
  const robotChoice = getrobotChoice();
  switch (userChoice + robotChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, robotChoice);
      break;
    case "RockPaper":
    case "PaperRock":
    case "ScissorsRock":
      lose(userChoice, robotChoice);
      break;
    case "RockRock":
    case "PaperPapaer":
    case "ScissorsScissors":
      draw(userChoice, robotChoice);
      break;
  }
}

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

userInteraction();
