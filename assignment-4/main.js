function getScore(promptMessage) {
  let score;
  while (true) {
    score = Number(prompt(promptMessage));
    if (Number.isFinite(score) && score >= 0 && score <= 100) {
      return score;
    }
    alert('Invalid input. Enter a number between 0 and 100');
  }
}

const userScore = getScore('Enter your score');
if (userScore < 40) {
  document.querySelector('#grade').innerHTML = '0';
} else if (userScore >= 40 && userScore < 52) {
  document.querySelector('#grade').innerHTML = '1';
} else if (userScore >= 52 && userScore < 64) {
  document.querySelector('#grade').innerHTML = '2';
} else if (userScore >= 64 && userScore < 76) {
  document.querySelector('#grade').innerHTML = '3';
} else if (userScore >= 76 && userScore < 88) {
  document.querySelector('#grade').innerHTML = '4';
} else if (userScore >= 88) {
  document.querySelector('#grade').innerHTML = '5';
}
