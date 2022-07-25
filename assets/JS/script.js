document.addEventListener("DOMContentLoaded", function() {

    //returns all buttons when dom is loaded - stored in array
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons)
    {
      button.addEventListener("click", function(){
        //when button is clicked, this is out event listener, this code will run
        if(this.getAttribute("data-type") === "submit")
        {
            checkAnswer();
        }
        else
        {
            let gameType = this.getAttribute("data-type");
            runGame(gameType)
        }

      })  
    }

    runGame("addition");
})

/**
 * The main game 'loop', called when the script is loaded
 * and after the users answer has been processed
 */

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition")
    {
        displayAdditionQuestion(num1, num2);
    }
    else if(gameType === "subtract")
    {
        displaySubtractQuestion(num1,num2);
    }
    else if(gameType === "multiply")
    {
        displayMultiplyQuestion(num1,num2);
    }
    else if(gameType === "division")
    {
        displayDivideQuestion(num1,num2);
    }
    else
    {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Check the answer against the first element in the returned calculateCorrectAnswer() array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer').value)
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0]

    if(isCorrect)
    {
        alert("correct answer")
    }
    else
    {
        alert(`Incorrect - you answered ${userAnswer}. The answer was ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
    
}

/**
 * Gets the operands (numbers) & the operator (plus, minus, etc)
 * directly from the dom & returns the correct answer
 */
function calculateCorrectAnswer() {
    //pulling values from dom
    let num1 = parseInt(document.getElementById('operand1').innerText);
    let num2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+")
    {
        return [num1 + num2, "addition"];
    }
    else
    {
        alert(`Unimplemented operator ${operator}`)
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(num1,num2) {
    document.getElementById('operand1').textContent = num1
    document.getElementById('operand2').textContent = num2
    document.getElementById('operator').textContent = "+"
}

function displaySubtractQuestion(num1,num2) {
    document.getElementById('operand1').textContent = num1
    document.getElementById('operand2').textContent = num2
    document.getElementById('operator').textContent = "-"
}

function displayMultiplyQuestion(num1,num2) {
    document.getElementById('operand1').textContent = num1
    document.getElementById('operand2').textContent = num2
    document.getElementById('operator').textContent = "x"
}

function displayDivideQuestion(num1,num2) {
    document.getElementById('operand1').textContent = num1
    document.getElementById('operand2').textContent = num2
    document.getElementById('operator').textContent = "÷"
    
    
}