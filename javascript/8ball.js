// die = ['./assets/dice_1.png', './assets/dice_2.png', './assets/dice_3.png', './assets/dice_4.png', './assets/dice_5.png', './assets/dice_6.png']; 

// function rollDice() {
//     let randomDice = die[Math.floor(Math.random()*die.length)];
//     document.getElementById("diceImage").src = randomDice;
//     document.getElementById("diceImage2").src = "";
// }

// function rollTwo() {
//     let randomDice = die[Math.floor(Math.random()*die.length)];
//     let randomTwo = die[Math.floor(Math.random()*die.length)];
//     document.getElementById("diceImage").src = randomDice;
//     document.getElementById("diceImage2").src = randomTwo;
// }

answers = ["Yes", "No", "Perhaps", "Might be", "Time will tell", "Definetly", "Absolutely... not", "That's a question for another day", "For sure!", "Can't know for sure"]

function eight_ball() {
    let validation = document.forms["question_form"]["question"].value;
    if (validation == "") {
        document.getElementById('booba').innerHTML = "You must enter a question first!";
        document.getElementById('booba').style.color = "red";
        document.getElementById('booba').style.transition = "0.25s";
        setTimeout(() => {
            document.getElementById('booba').innerHTML = "Ask the mighty 8-ball a question!";  
            document.getElementById('booba').style.color = "black";
        }, 1000);
    }
    else {
    let choice = answers[Math.floor(Math.random()*answers.length)];
    document.querySelector('h2').innerHTML = "You have asked: " + validation;
    document.getElementById('answer').innerHTML = choice; 
    document.getElementById('question').value = "";
    }
}