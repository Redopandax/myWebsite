// function myFunction() {
//     colors = ['red', 'blue', 'purple', 'grey', 'black']; 
//     let randomColor = colors[Math.floor(Math.random()*colors.length)];
//     document.querySelector('.box').style.backgroundColor = randomColor;
// }

// function colorChangeWhite() {
//     document.querySelector('section').style.backgroundColor = "white";
// }

// function colorChangeAqua() {
//     document.querySelector('section').style.backgroundColor = "aqua";    
// }

// function colorChangePurple() {
//     document.querySelector('section').style.backgroundColor = "rebeccapurple";
// }

die = ['./assets/dice_1.png', './assets/dice_2.png', './assets/dice_3.png', './assets/dice_4.png', './assets/dice_5.png', './assets/dice_6.png']; 

function rollDice() {
    let randomDice = die[Math.floor(Math.random()*die.length)];
    document.getElementById("diceImage").src = randomDice;
    document.getElementById("diceImage2").src = "";
}

function rollTwo() {
    let randomDice = die[Math.floor(Math.random()*die.length)];
    let randomTwo = die[Math.floor(Math.random()*die.length)];
    document.getElementById("diceImage").src = randomDice;
    document.getElementById("diceImage2").src = randomTwo;
}
