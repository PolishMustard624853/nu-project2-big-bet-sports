homeButton = document.querySelector('#home-team-button');
awayButton = document.querySelector('#away-team-button');
betText = document.querySelector('#bet-choice');
const teamChoice = {};

const saveButtonHandler = async (event) => {
  if (event.target) {
    if (teamChoice.choice === true || teamChoice.choice === false) {
      const match_id = window.location.pathname.split('/').pop();

      const response = await fetch('/api/bet', {
        method: 'POST',
        body: JSON.stringify({ ...teamChoice, match_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create bet');
      }
    }
  }
};

const teamButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-team')) {
    userChoice = event.target.getAttribute('data-team');
    if (userChoice === 'true') {
      betText.innerText = 'You picked the home team to win!';
      teamChoice.choice = true;
    } else if (userChoice === 'false') {
      betText.innerText = 'You picked the away team to win!';
      teamChoice.choice = false;
    }
    console.log(teamChoice.choice);
  }
};

document.querySelectorAll('.team-button').forEach((element) => {
  element.addEventListener('click', teamButtonHandler);
});
document
  .querySelector('#save-bet-button')
  .addEventListener('click', saveButtonHandler);
