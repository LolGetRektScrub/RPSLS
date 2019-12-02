var choices = [ "rock", "paper", "scissors", "lizard", "spock"];
var i = Math.floor(Math.random()* 5);
var e = Math.floor(Math.random()* 5);
var computerchoice = choices[i];
var computerchoice2 = choices[e];
var userpoints = 0;
var computerpoints = 0;
var computerpoints2 = 0;
function score(){
    var score_div = document.getElementById("score").innerHTML = " - " + userpoints;
}
setInterval(score, 50);
function score2(){
    var score_div = document.getElementById("score2").innerHTML = " - " + computerpoints;
}
setInterval(score2, 50);
function score3(){
    var score_div = document.getElementById("score3").innerHTML = " - " + computerpoints2;
}
setInterval(score3, 50);
function convert(word){
    if(word === "rock") return '<i class="far fa-hand-rock"></i>';
    if(word === "paper") return '<i class="far fa-hand-paper"></i>';
    if(word === "scissors") return '<i class="far fa-hand-scissors"></i>';
    if(word === "lizard") return '<i class="far fa-hand-lizard"></i>';
    return '<i class="far fa-hand-spock"></i>'
}
function game(UserChoice){
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);
    var comDiv2 = document.getElementById("ComObject2");
    comDiv2.innerHTML = convert(ComChoice2);
    if (UserChoice === "rock" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "rock" && ComChoice === "paper" && ComChoice2 === "lizard" || UserChoice === "rock" && ComChoice === "lizard" && ComChoice2 === "paper" || UserChoice === "rock" && ComChoice === "lizard" && ComChoice2 === "lizard") {
        win();
    }
    if (UserChoice === "paper" && ComChoice === "spock" && ComChoice2 === "spock" || UserChoice === "paper" && ComChoice === "Spock" && ComChoice2 === "rock" || UserChoice === "paper" && ComChoice === "rock" && ComChoice2 === "spock" || UserChoice === "paper" && ComChoice === "rock" && ComChoice2 === "rock") {
        win();
    }
    if (UserChoice === "scissors" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "scissors" && ComChoice === "paper" && ComChoice2 === "lizard" || UserChoice === "scissors" && ComChoice === "lizard" && ComChoice2 === "paper" || UserChoice === "scissors" && ComChoice === "lizard" && ComChoice2 === "lizard") {
        win();
    }
    if (UserChoice === "lizard" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "lizard" && ComChoice === "paper" && ComChoice2 === "spock" || UserChoice === "lizard" && ComChoice === "spock" && ComChoice2 === "paper" || UserChoice === "lizard" && ComChoice === "spock" && ComChoice2 === "spock") {
        win();
    }
    if (UserChoice === "spock" && ComChoice === "scissors" && ComChoice2 === "scissors" || UserChoice === "spock" && ComChoice === "scissors" && ComChoice2 === "rock" || UserChoice === "spock" && ComChoice === "rock" && ComChoice2 === "scissors" || UserChoice === "spock" && ComChoice === "rock" && ComChoice2 === "rock") {
        win();
    }
    if (UserChoice === ComChoice2) {
        draw();
    }
    if (UserChoice === ComChoice) {
        draw();
    }
    if (ComChoice === "rock" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "rock" && ComChoice === "paper" && ComChoice2 === "lizard" || UserChoice === "rock" && ComChoice === "lizard" && ComChoice2 === "paper" || UserChoice === "rock" && ComChoice === "lizard" && ComChoice2 === "lizard") {
        Comwin();
    }
    if (ComChoice === "paper" && ComChoice === "spock" && ComChoice2 === "spock" || UserChoice === "paper" && ComChoice === "Spock" && ComChoice2 === "rock" || UserChoice === "paper" && ComChoice === "rock" && ComChoice2 === "spock" || UserChoice === "paper" && ComChoice === "rock" && ComChoice2 === "rock") {
        Comwin();
    }
    if (ComChoice === "scissors" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "scissors" && ComChoice === "paper" && ComChoice2 === "lizard" || UserChoice === "scissors" && ComChoice === "lizard" && ComChoice2 === "paper" || UserChoice === "scissors" && ComChoice === "lizard" && ComChoice2 === "lizard") {
        Comwin();
    }
    if (ComChoice === "lizard" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "lizard" && ComChoice === "paper" && ComChoice2 === "spock" || UserChoice === "lizard" && ComChoice === "spock" && ComChoice2 === "paper" || UserChoice === "lizard" && ComChoice === "spock" && ComChoice2 === "spock") {
        Comwin();
    }
    if (ComChoice === "spock" && ComChoice === "scissors" && ComChoice2 === "scissors" || UserChoice === "spock" && ComChoice === "scissors" && ComChoice2 === "rock" || UserChoice === "spock" && ComChoice === "rock" && ComChoice2 === "scissors" || UserChoice === "spock" && ComChoice === "rock" && ComChoice2 === "rock") {
        Comwin();
    }
    if (ComChoice2 === "rock" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "rock" && ComChoice === "paper" && ComChoice2 === "lizard" || UserChoice === "rock" && ComChoice === "lizard" && ComChoice2 === "paper" || UserChoice === "rock" && ComChoice === "lizard" && ComChoice2 === "lizard") {
        Com2win();
    }
    if (ComChoice2 === "paper" && ComChoice === "spock" && ComChoice2 === "spock" || UserChoice === "paper" && ComChoice === "Spock" && ComChoice2 === "rock" || UserChoice === "paper" && ComChoice === "rock" && ComChoice2 === "spock" || UserChoice === "paper" && ComChoice === "rock" && ComChoice2 === "rock") {
        Com2win();
    }
    if (ComChoice2 === "scissors" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "scissors" && ComChoice === "paper" && ComChoice2 === "lizard" || UserChoice === "scissors" && ComChoice === "lizard" && ComChoice2 === "paper" || UserChoice === "scissors" && ComChoice === "lizard" && ComChoice2 === "lizard") {
        Com2win();
    }
    if (ComChoice2 === "lizard" && ComChoice === "paper" && ComChoice2 === "paper" || UserChoice === "lizard" && ComChoice === "paper" && ComChoice2 === "spock" || UserChoice === "lizard" && ComChoice === "spock" && ComChoice2 === "paper" || UserChoice === "lizard" && ComChoice === "spock" && ComChoice2 === "spock") {
        Com2win();
    }
    if (ComChoice2 === "spock" && ComChoice === "scissors" && ComChoice2 === "scissors" || UserChoice === "spock" && ComChoice === "scissors" && ComChoice2 === "rock" || UserChoice === "spock" && ComChoice === "rock" && ComChoice2 === "scissors" || UserChoice === "spock" && ComChoice === "rock" && ComChoice2 === "rock") {
        Com2win();
    }
}
function win {
    userpoints++;
    alert("You Win!");
}
function Comwin {
    computerpoints++;
    alert("Computer 1 Wins!");
}
function Com2win {
    computerpoints2++;
    alert("Computer 2 Wins!");
}
