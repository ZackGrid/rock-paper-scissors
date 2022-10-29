
// counters 
let timesLost = 0;
let timesWon = 0;
let ties = 0;
let finalResult = "";


const score = document.querySelector('#score');
const resultInfo = document.createElement('p');
const final = document.createElement('p');
const scoreVs = document.createElement('p');

// add buttons funcionality
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.classList)
        
    })
})

const resetButton = document.createElement('button');

/* Function to generate a random choice limited to 3, transform into an 
string, and return it*/
function getComputerChoice() {
    const choiceN = Math.floor(Math.random() * 3);
    let computerChoice = "";
    switch(choiceN) {
        case 0:
            computerChoice = "pedra";
            break;
        case 1:
            computerChoice = "papel";
            break;
        case 2:
            computerChoice = "tesoura"
            break;
    }
    
    return computerChoice;
}

/* Function to compare the user choice and the computer choice, and declare a winner*/
function playRound(machineChoice, playerChoice) {

    let result;

    if (playerChoice == machineChoice) {
        result = "Empate"; 
    } else if (playerChoice == "pedra" && machineChoice == "tesoura") {
        result = "Você ganhou!";
    } else if (playerChoice == "papel" && machineChoice == "pedra") {
        result = "Você ganhou!";
    } else if (playerChoice == "tesoura" && machineChoice == "papel") {
        result = "Você ganhou!";
    } else {
        result = "Você perdeu!"
    }
    resultInfo.setAttribute('style', 'white-space: pre;')
    resultInfo.textContent = "Você escolheu " + playerChoice + "\r\n" + "A máquina escolheu " + machineChoice + "\r\n" + result;
    
    score.appendChild(resultInfo);
    

    if (result == "Você perdeu!") {
            timesLost += 1;
        } else if (result == "Você ganhou!") {
            timesWon += 1;
        } else {
            ties += 1;
    }

    //score board
    scoreVs.setAttribute('style', 'white-space: pre;')
    scoreVs.textContent = "Humano: " + timesWon + "\r\nMaquina: " + timesLost + "\r\nEmpates: " + ties;
    score.appendChild(scoreVs);

    // first to make 5 points end game and show score
    if (timesLost == 5 || timesWon == 5) {
        if (timesWon > timesLost) {
            finalResult = "Você é o vencedor na luta contra a máquina!";        
        } else if (timesWon < timesLost) {
            finalResult = "A máquina ganhou e dominará o mundo!";
        } 
        
        //replaced by score board
        // resultInfo.textContent += "\r\n \r\nThe machine won " + timesLost + " times \r\n" + "You've won " + timesWon + " times \r\n" + "number of ties " + ties + "\r\n";

        
        final.classList.add('final');
        final.textContent = finalResult;
        final.style.cssText = 'color: cyan; background-color: rgb(29, 27, 25); font-size: 25px; font-weight: 500';
        score.appendChild(final);
        
        // remove buttons so it can be replaced by a reset button
        buttons.forEach((button) => {
            button.remove();
        })

        
        // reset button creation and function
        const reset = document.querySelector('.buttons');

        resetButton.textContent = "Reset";
        resetButton.classList.add('reset');
        const right = document.querySelector('.right');
        const left = document.querySelector('.left');
        reset.appendChild(resetButton);
        right.textContent = "<< Tentar novamente";
        left.textContent = "Tentar novamente >>";

        
        resetButton.addEventListener('click', () => {
            window.location.reload();
        })
    }
    
}


// old code

// // function to play a set of game rounds
// function game() {

//     let timesLost = 0;
//     let timesWon = 0;
//     let ties = 0;

//     for (let i = 0; i < 5; i++) {
        
//         /* ask user to choose between rock, paper, scissors, get user input, 
//         and save it into variable for further comparison  */
//         let userChoice = prompt("Please choose between rock, paper, or scissors: ");
//         userChoice = userChoice.toLowerCase();


//         // Makes sure that user chooses only one of the three choices and that it's lower case
//         while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
//             userChoice = prompt("Invalid choice, please write again, do you want rock, paper, or scissors: ")
//             userChoice = userChoice.toLowerCase();
//         }

//         // use function to get computer choice and save it on a variable
//         const computerChoice = getComputerChoice();
        
//         // save play data to show results in the end, and who's the ultimate winner
//         let result = playRound(computerChoice, userChoice);
//         console.log(result);
        
//         if (result == "You lost!") {
//             timesLost += 1;
//         } else if (result == "You've won!") {
//             timesWon += 1;
//         } else {
//             ties += 1;
//         }
        
//     }

//     // calculate game data, show results and define ultimate winner
//     let finalResult = "";

//     if (timesWon > timesLost) {
//         finalResult = "You're the ultimate winner!";        
//     } else if (timesWon < timesLost) {
//         finalResult = "The machine is the ultimate winner!";
//     } else {
//         finalResult = "It's a tie"
//     }

//     console.log(`The machine won ${timesLost} times
//     You've won ${timesWon} times
//     number of ties ${ties}
//     ${finalResult}`);
// }
