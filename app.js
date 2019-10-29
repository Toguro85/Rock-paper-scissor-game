const game = () =>{
  let pScore=0;
  let cScore=0;

  const startGame = () =>{
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click",()=>{
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //computer's pick
    const computerOptions = ['rock','paper','scissors'];

    options.forEach(option=>{
      option.addEventListener("click",function() {

        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //call compareHands
        compareHands(this.textContent, computerChoice);

        //Update images
        playerHand.src = `./assets/${this.textContent}.png`;

        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });

  };

  const updateScore = () =>{
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice,computerChoice) =>{

    const winner = document.querySelector(".winner");

    if(playerChoice === computerChoice)
    {
      winner.textContent = "It is a tie";
      return;
    }

    if(playerChoice === 'rock')
    {
      if(computerChoice === 'paper')
      {
        winner.textContent = "Paper beats rock , Computer Wins";
        cScore++;
        updateScore();
        return;
      }
      else {
        winner.textContent = "Rock beats scissors , Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    if(playerChoice === 'paper')
    {
      if(computerChoice === 'scissors')
      {
        winner.textContent = "Scissors beats paper , Computer Wins";
        cScore++;
        updateScore();
        return;
      }
      else {
        winner.textContent = "Paper beats rock , Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

    if(playerChoice === 'scissors')
    {
      if(computerChoice === 'rock')
      {
        winner.textContent = "Rock beats scissors , Computer Wins";
        cScore++;
        updateScore();
        return;
      }
      else {
        winner.textContent = "Scissors beats paper , Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }

  };

  // call all inner functions
  startGame();
  playMatch();
};

// start the game
game();
