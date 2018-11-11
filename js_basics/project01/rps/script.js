$(document).ready(function () {
    const rpsChoices = ['rock', 'paper', 'scissor'];
    let computerScore = 0;
    let userScore = 0;

    const rps = () => {
        const userChoice = prompt(`Choose Rock, Paper or Scissor`).toLowerCase();
        const computerChoice = rpsChoices[Math.floor((Math.random() * rpsChoices.length))];
        if (userChoice === 'rock' || 'paper' || 'scissor') {
            if (userChoice === computerChoice) {
                alert(`You choose ${userChoice}. I choose ${computerChoice}. This is a draw`)
            } else if (userChoice === 'rock' && computerChoice === 'paper'
                || userChoice === 'paper' && computerChoice === 'scissor'
                || userChoice === 'scissor' && computerChoice === 'rock') {
                alert(`You choose ${userChoice}. I choose ${computerChoice}. You loose`);
                computerScore++;
            } else if (computerChoice === 'rock' && userChoice === 'paper'
                || computerChoice === 'paper' && userChoice === 'scissor'
                || computerChoice === 'scissor' && userChoice === 'rock') {
                alert(`You choose ${userChoice}. I choose ${computerChoice}. You win`);
                userScore++;
            } else {
                alert('Please enter a correct value: Rock, Paper or Scissor')
            }
        }
    };

    while (computerScore < 5) {
        rps()
    }
    $('#scoreboard').text('Scoreboard');
    $('#computerScore').text(`Computer Score: ${computerScore}`);
    $('#userScore').text(`User Score: ${userScore}`);
});
