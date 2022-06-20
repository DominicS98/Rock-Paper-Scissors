//A simple rock, paper, scissors game to practice switch and if statements. A random number generates
// a florred number that functions as a RNG game. Simple and clean.
let playerWeapon = (prompt("Let's play Rock, Paper, Scissors. Type your choice").toLowerCase());
let computerWeapon = Math.floor((Math.random()*3 + 1));
 //Random number gets a 3 random possibility for an output 
switch(computerWeapon) {
    case 1:
        console.log("Your adversary chose Rock");
        break;
    case 2:
        console.log("The PC got some Paper");
        break;
    case 3:
        console.log("The AI is running towards you with some Scissors!")
        break;
 }
 //3*3+1 possible outcomes
if ((playerWeapon !== "scissors" && playerWeapon !== "paper" && playerWeapon !== "rock")){ 
     
    console.log("Wrong imput")
}else if ((computerWeapon === 1) && (playerWeapon === "rock")) {
    console.log("You both have rock, sparks but no fire, it's a draw!");
 } 
if ((computerWeapon === 1) && (playerWeapon === "paper")) {
    console.log("You wrap the rock with your paper, you win!");
 } 
if ((computerWeapon === 1) && (playerWeapon === "scissors")) {
    console.log("The rock smashes and breaks you puny scissor, you lose!");
 } 
if ((computerWeapon === 2) && (playerWeapon === "rock")) {
    console.log("The paper wraps your rock, you lose!");
 } 
if ((computerWeapon === 2) && (playerWeapon === "paper")) {
    console.log("You both have papers and make some origami with it, draw!");
 } 
if ((computerWeapon === 2) && (playerWeapon === "scissors")) {
    console.log("You cut the paper in a billion pieces, you win!");
 } 
if ((computerWeapon === 3) && (playerWeapon === "rock")) {
    console.log("You smash the scissor intro a metal pulp, you win!");
 } 
if ((computerWeapon === 3) && (playerWeapon === "paper")) {
    console.log("Your paper is cut and turned intro dust, you lose!");
 } 
if ((computerWeapon === 3) && (playerWeapon === "scissors")) {
    console.log("You got both scissors, draw!");
}

    


