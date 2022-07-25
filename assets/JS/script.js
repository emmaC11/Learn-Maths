document.addEventListener("DOMContentLoaded", function() {

    //returns all buttons when dom is loaded - stored in array
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons)
    {
      button.addEventListener("click", function(){
        //when button is clicked, this is out event listener, this code will run
        if(this.getAttribute("data-type") === "submit")
        {
            alert("You clicked submit");
        }
        else
        {
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
        }

      })  
    }
})

/**
 * The main game 'loop', called when the script is loaded
 * and after the users answer has been processed
 */

function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}