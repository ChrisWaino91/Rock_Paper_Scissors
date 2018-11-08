/*
GAME FUNCTION:
- Player must choose Rock, Paper or Scissors
- Notify player of the CPUs choice
- Notify player whether they have won, lost or drawn
- Let player choose to play again
*/

// UI Elements
const message = document.querySelector('.message');
const game = document.querySelector('#game');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
let cpuChoice;
let result;


// Load all event listeners
loadEventListeners();


// Load event listers 
function loadEventListeners(){
    // Run The Game - Rock Selection
    rockBtn.addEventListener('click', runGameRock);
    paperBtn.addEventListener('click', runGamePaper);
    scissorsBtn.addEventListener('click', runGameScissors);
}


function youLose(){
  message.textContent = `${result}`;
  message.style.color = 'red';
}

function youWin(){
  message.textContent = `${result}`;
  message.style.color = 'green';
}

function youDraw(){
  message.textContent = `${result}`;
  message.style.color = 'initial';
}


// Run the game based on the user's Rock selection...

function runGameRock(e){
// Calculate the CPUs decision
    cpuChoice = Math.random()*3+1;
    cpuChoice = Math.floor(cpuChoice);
    console.log(cpuChoice);

    // Calculating Draw
      if(cpuChoice === 1){
        result = "CPU also chose Rock - This is a Draw!"
        youDraw();
      } 

    // Calculating Loss
    else if(cpuChoice === 2){
      result = "CPU chose Paper - You Lose!"
      youLose();
    }

    // Calculating Win
    else {
      result = "CPU chose Scissors - You Win!"
      youWin();
    }
  e.preventDefault(); 
}



// Run the game based on the user's Paper selection...

function runGamePaper(e){
  // Calculate the CPUs decision
      cpuChoice = Math.random()*3+1;
      cpuChoice = Math.floor(cpuChoice);
      console.log(cpuChoice);
  
      // Calculating Win
        if(cpuChoice === 1){
          result = "CPU chose Rock - You Win!"
          youWin();
        } 
  
      // Calculating Draw
      else if(cpuChoice === 2){
        result = "CPU also chose Paper - This is a Draw!"
        youDraw();
      }
  
      // Calculating Loss
      else {
        result = "CPU chose Scissors - You Lose!"
        youLose();
      }
    e.preventDefault(); 
  }
  

  // Run the game based on the user's Scissors selection...

function runGameScissors(e){
  // Calculate the CPUs decision
      cpuChoice = Math.random()*3+1;
      cpuChoice = Math.floor(cpuChoice);
      console.log(cpuChoice);
  
      // Calculating Win
        if(cpuChoice === 1){
          result = "CPU chose Rock - You Lose!"
          youLose();
        } 
  
      // Calculating Win
      else if(cpuChoice === 2){
        result = "CPU chose Paper - You Win!"
        message.textContent = `${result}`;
        youWin();
      }
  
      // Calculating Draw
      else {
        result = "CPU also chose Scissors - This is a Draw!"
        youDraw();
      }
    e.preventDefault(); 
  }


