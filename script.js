

let playerScore  = 0;
let computerScore = 0;




// get computer random choice 
const getComputerChoice = () =>{
    let choices = ['rock','paper','scissor']
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

//determine the winner of the game
const playRound = (playerSelection, computerSelection) =>{
    
    // display message + add score to the winner
    if(playerSelection === 'paper' && computerSelection === 'rock' || 
    playerSelection === 'rock' && computerSelection === 'scissor' || 
    playerSelection === 'scissor' && computerSelection === 'paper'){

        playerScore++;
        console.log(playerSelection, computerSelection);
        console.log("You  win" + `player score : ${playerScore}`)
        playerWins = true;

        //get the display message result of each round 
        if(playerScore == 1){
            messageResult = 'Goodjob ! 4 more wins to go !';
        }else if(playerScore == 2){
            messageResult = 'Lucky you!';
        }else if(playerScore == 3){
            messageResult = 'Good choice! Keep it up!';
        } else if(playerScore == 4){
            messageResult = 'You got this ! 1 more win';
        } else if(playerScore == 5){
            messageResult = 'You win!';
        }  
        console.log(messageResult);
    }else if(playerSelection === computerSelection ){

        console.log(playerSelection, computerSelection);
        console.log("It's a tie");
        tie = true;


        messageResult = 'It\'s a tie';
        console.log(messageResult);

    }else{

        computerScore++;
        console.log(playerSelection, computerSelection);
        console.log("Computer wins"+ `computer score : ${computerScore}`)
        computerWins = true;

        //get the display message result of each round 
        if(computerScore == 1){
            messageResult = 'That\'s okay.Come on you got this';
        }else if(computerScore == 2){
            messageResult = 'Ahrrgg .So unfortunate';
        }else if(computerScore == 3){
            messageResult = 'That\'s okay. You can still win.';
        } else if(computerScore == 4){
            messageResult = 'Don\'t give up. You can win this';
        } else if(computerScore == 5){
            messageResult = 'You Lose :(!';
        }

    }   
        console.log(messageResult);


    
    
    
}

//set first to 5 wins the game 
const game = (playerSelection, computerSelection) => {
    
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
        // your code here!
    }
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();

game('rock','paper');

