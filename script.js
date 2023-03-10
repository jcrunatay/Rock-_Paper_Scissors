// -- Global
const btn_rock_choice = document.querySelector(".btn_rock_choice");
const btn_paper_choice = document.querySelector(".btn_paper_choice");
const btn_scissor_choice = document.querySelector(".btn_scissor_choice");
const player_selected_choiced = document.querySelector(".player_selected_choiced");
const computer_random_choiced = document.querySelector(".computer_random_choiced");
const roundResultEl = document.querySelector('.messageResult');
const playerScoreEl = document.querySelector('.player_score');
const computerScoreEl = document.querySelector('.computer_score');

//start game Elements
const startGameContainerEl = document.querySelector('.start_game_container');
const startGameBtnEl = document.querySelector('.start_game_btn');
const startGameBtnContainerEl = document.querySelector('.start_game_btn_container');
const headerEl = document.getElementById('header')
const mainEl = document.getElementById('main')

//end game Elements
const endGameContainerEl = document.querySelector('.end_game_container')
const endGameBtnContainerEl = document.querySelector('.end_game_btn_container');
const endGameMmessageResultEl = document.querySelector('.end_game_message_result')
const endGameBtnEl = document.querySelector('.end_game_btn');



let showPlayerChoicedBg = '';
let showComputerChoicedBg = '';


//track score and final message result
let playerScore  = 0;
let computerScore = 0;
let gamesPlayed = 0;
let finalMessageResult = '';


const renderGamePage = () => {


        //put both end and start game cointainer to display none
        startGameContainerEl.classList.add('display--none');
        endGameContainerEl.classList.add('display--none'); 

        startGameBtnContainerEl.classList.add('slide-right');

        if(gamesPlayed > 0){
            endGameBtnContainerEl.classList.add('slide-left');
        }


        
    setTimeout(() => {
        //show game container
        headerEl.classList.add('display--block');
        mainEl.classList.add('display--block');
        
        headerEl.classList.remove('display--none');
        mainEl.classList.remove('display--none');
        startGameContainerEl.classList.remove('display--flex');
        endGameContainerEl.classList.remove('display--flex');
        
    }, 2500);

    gamesPlayed++;

}
startGameBtnContainerEl.addEventListener('click',renderGamePage);
endGameBtnContainerEl.addEventListener('click',renderGamePage);

const renderEndGamePage = () => {
    endGameContainerEl.classList.add('display--flex'); 
}




// get computer random choice 
const getComputerChoice = () =>{
    let choices = ['rock','paper','scissor']
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

const setBtnChoicesFunctionality = (isDisabled,whichpointerEvents) => {
    //disable btn choices
    btn_rock_choice.disabled = isDisabled;
    btn_paper_choice.disabled = isDisabled;
    btn_scissor_choice.disabled = isDisabled;

    //remove hover effect
    btn_rock_choice.style.pointerEvents = whichpointerEvents;
    btn_paper_choice.style.pointerEvents = whichpointerEvents;
    btn_scissor_choice.style.pointerEvents = whichpointerEvents;
}


//determine the winner of the game
const playRound = (playerSelection, computerSelection) =>{
    
    let messageResult = '';

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
            messageResult = 'You Win! Let\'s Celebrate :) !';
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
            messageResult = 'You Lose😔! Better Luck Next Time';
        }

    }   
    
    setTimeout(() => {
        //set the scores of both player and computer
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;

        //display the message after each round
        roundResultEl.textContent = messageResult;
    }, 2000);

    //disable btn_choice  to wait for the result first on each round and remove the hover effect for 2s
    setBtnChoicesFunctionality(true,'none');

    //put them back to normal after 2s
    setTimeout( () => setBtnChoicesFunctionality(false,'auto'), 2000 )  

    finalMessageResult = messageResult;

}



//set first to reach 5 wins to win the game
const game = (playerSelection, computerSelection) => {
    
    playRound(playerSelection, computerSelection)

    
}



const btnHandler = (event) =>{

    let computerSelection = getComputerChoice();
    let playerSelection = '';

    //get clicked html element
    const clickedEl = event.target;

    //determine if user intended to click rock | paper | scissor button
    const playerChoice = clickedEl.className;

    //remove the previous background if its 2nd round 
    if(showPlayerChoicedBg !== ""){
        player_selected_choiced.classList.remove(showPlayerChoicedBg,'fadeInRight');
        computer_random_choiced.classList.remove(showComputerChoicedBg,"fadeInLeft");

        //Restarting a CSS Animation
        void player_selected_choiced.offsetWidth; 
        void computer_random_choiced.offsetWidth;
    }

    //background class to be added
    if(playerChoice.includes('btn_rock_choice')){
        showPlayerChoicedBg = 'rock-bg';
        playerSelection = 'rock'
    }else if (playerChoice.includes('btn_paper_choice')){
        showPlayerChoicedBg = 'paper-bg';
        playerSelection = 'paper'
    }else if (playerChoice.includes('btn_scissor_choice')){
        showPlayerChoicedBg = 'scissor-bg';
        playerSelection = 'scissor'
    }
    
    player_selected_choiced.classList.add(showPlayerChoicedBg,'fadeInRight');

    switch (computerSelection) {
        case 'rock':
            showComputerChoicedBg = 'rock-bg';
        break;
        case 'paper':
            showComputerChoicedBg = 'paper-bg';
        break;
        case 'scissor':
            showComputerChoicedBg = 'scissor-bg';
        break;
    }
    computer_random_choiced.classList.add(showComputerChoicedBg,'fadeInLeft');

    //process the game winner & loser
    game(playerSelection, computerSelection)
    
    if(playerScore === 5 || computerScore === 5){
        setTimeout(() => {
            gamesPlayed++;
            roundResultEl.textContent = "";
            endGameMmessageResultEl.textContent = finalMessageResult;
            //render the game result
            renderEndGamePage();
            playerScore = 0 ;
            computerScore = 0 ;
            //reset score
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
            // remove the previous match selected weapon in thhe middle
            player_selected_choiced.classList.remove(showPlayerChoicedBg,'fadeInRight');
            computer_random_choiced.classList.remove(showComputerChoicedBg,'fadeInLeft');
            endGameBtnContainerEl.classList.remove('slide-left');
            void endGameBtnContainerEl.offsetWidth; 

        }, 2500);


    }

}
btn_rock_choice.addEventListener('click',btnHandler);
btn_paper_choice.addEventListener('click',btnHandler);
btn_scissor_choice.addEventListener('click',btnHandler);







