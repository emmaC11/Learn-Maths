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

    document.getElementById("answer").addEventListener("keydown",function(event)
    {
        if(event.key === "Enter")
        {
            checkAnswer();
        }
    });

    runGame("addition");
})

/**
 * The main game 'loop', called when the script is loaded
 * and after the users answer has been processed
 */

function runGame(gameType) {
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();

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
        num1 > num2;
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
        incrementScore();
    }
    else
    {
        incrementWrongAnswer();
        console.log(calculatedAnswer[0])
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
    else if(operator === "-")
    {
        return [num1 - num2, "subtract"]
    }
    else if(operator === "x")
    {
        return [num1 * num2, "multiply"]
    }
    else
    {
        return [Math.round(num1/num2), "division"]
    }

}

/**
 * Gets current score from dom and increments by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets current score from dom and increments by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(num1,num2) {
    document.getElementById('operand1').textContent = num1
    document.getElementById('operand2').textContent = num2
    document.getElementById('operator').textContent = "+"
}

function displaySubtractQuestion(num1,num2) {
    document.getElementById('operand1').textContent = num1 > num2 ? num1 : num2;
    document.getElementById('operand2').textContent = num1 > num2 ? num2 : num1;
    document.getElementById('operator').textContent = "-"
}

function displayMultiplyQuestion(num1,num2) {
    document.getElementById('operand1').textContent = num1
    document.getElementById('operand2').textContent = num2
    document.getElementById('operator').textContent = "x"
}

function displayDivideQuestion(num1,num2) {
    document.getElementById('operand1').textContent = num1 > num2 ? num1 : num2;
    document.getElementById('operand2').textContent = num1 > num2 ? num2 : num1;
    document.getElementById('operator').textContent = "÷"
    
    
}