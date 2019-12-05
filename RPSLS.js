var choices = [ "rock", "paper", "scissors", "lizard", "spock"];
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
    var i = Math.floor(Math.random()* 5);
    var e = Math.floor(Math.random()* 5);
    var computerchoice = choices[i];
    var computerchoice2 = choices[e];
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var UserDiv = document.getElementById("YourObject");
    UserDiv.innerHTML = convert(UserChoice);
    var ComDiv = document.getElementById("ComObject");
    ComDiv.innerHTML = convert(computerchoice);
    var ComDiv2 = document.getElementById("ComObject2");
    ComDiv2.innerHTML = convert(computerchoice2);
    if(UserChoice === "rock" && computerchoice === "scissors" && computerchoice2 === "scissors" || UserChoice === "rock" && computerchoice === "lizard" && computerchoice2 === "lizard" || UserChoice === "rock" && computerchoice === "scissors" && computerchoice2 === "lizard" || UserChoice === "rock" && computerchoice === "lizard" && computerchoice2 === "scissors"){
        win();
    }
    if(UserChoice === "paper" && computerchoice === "rock" && computerchoice2 === "rock" || UserChoice === "paper" && computerchoice === "spock" && computerchoice2 === "spock" || UserChoice === "paper" && computerchoice === "rock" && computerchoice2 === "spock" || UserChoice === "paper" && computerchoice === "spock" && computerchoice2 === "rock"){
        win();
    }
    if(UserChoice === "scissors" && computerchoice === "paper" && computerchoice2 === "paper" || UserChoice === "scissors" && computerchoice === "lizard" && computerchoice2 === "lizard" || UserChoice === "scissors" && computerchoice === "paper" && computerchoice2 === "lizard" || UserChoice === "scissors" && computerchoice === "lizard" && computerchoice2 === "paper"){
        win();
    }
    if(UserChoice === "lizard" && computerchoice === "spock" && computerchoice2 === "spock" || UserChoice === "lizard" && computerchoice === "paper" && computerchoice2 === "paper" || UserChoice === "lizard" && computerchoice === "spock" && computerchoice2 === "paper" || UserChoice === "lizard" && computerchoice === "paper" && computerchoice2 === "spock"){
        win();
    }
    if(UserChoice === "spock" && computerchoice === "scissors" && computerchoice2 === "scissors" || UserChoice === "spock" && computerchoice === "rock" && computerchoice2 === "rock" || UserChoice === "spock" && computerchoice === "scissors" && computerchoice2 === "rock" || UserChoice === "spock" && computerchoice === "rock" && computerchoice2 === "scissors"){
        win();
    }
    if(computerchoice === "rock" && UserChoice === "scissors" && computerchoice2 === "scissors" || computerchoice === "rock" && UserChoice === "lizard" && computerchoice2 === "lizard" || computerchoice === "rock" && UserChoice === "scissors" && computerchoice2 === "lizard" || computerchoice === "rock" && UserChoice === "lizard" && computerchoice2 === "scissors"){
        win1();
    }
    if(computerchoice === "paper" && UserChoice === "rock" && computerchoice2 === "rock" || computerchoice === "paper" && UserChoice === "spock" && computerchoice2 === "spock" || computerchoice === "paper" && UserChoice === "rock" && computerchoice2 === "spock" || computerchoice === "paper" && UserChoice === "spock" && computerchoice2 === "rock"){
        win1();
    }
    if(computerchoice === "scissors" && UserChoice === "paper" && computerchoice2 === "paper" || computerchoice === "scissors" && UserChoice === "lizard" && computerchoice2 === "lizard" || computerchoice === "scissors" && UserChoice === "paper" && computerchoice2 === "lizard" || computerchoice === "scissors" && UserChoice === "lizard" && computerchoice2 === "paper"){
        win1();
    }
    if(computerchoice === "lizard" && UserChoice === "spock" && computerchoice2 === "spock" || computerchoice === "lizard" && UserChoice === "paper" && computerchoice2 === "paper" || computerchoice === "lizard" && UserChoice === "spock" && computerchoice2 === "paper" || computerchoice === "lizard" && UserChoice === "paper" && computerchoice2 === "spock"){
        win1();
    }
    if(computerchoice === "spock" && UserChoice === "scissors" && computerchoice2 === "scissors" || computerchoice === "spock" && UserChoice === "rock" && computerchoice2 === "rock" || computerchoice === "spock" && UserChoice === "scissors" && computerchoice2 === "rock" || computerchoice === "spock" && UserChoice === "rock" && computerchoice2 === "scissors"){
        win1();
    }
    if(computerchoice2 === "rock" && UserChoice === "scissors" && computerchoice === "scissors" || computerchoice2 === "rock" && UserChoice === "lizard" && computerchoice === "lizard" || computerchoice2 === "rock" && UserChoice === "scissors" && computerchoice === "lizard" || computerchoice2 === "rock" && UserChoice === "lizard" && computerchoice === "scissors"){
        win2();
    }
    if(computerchoice2 === "paper" && UserChoice === "rock" && computerchoice === "rock" || computerchoice2 === "paper" && UserChoice === "spock" && computerchoice === "spock" || computerchoice2 === "paper" && UserChoice === "rock" && computerchoice === "spock" || computerchoice2 === "paper" && UserChoice === "spock" && computerchoice === "rock"){
        win2();
    }
    if(computerchoice2 === "scissors" && UserChoice === "paper" && computerchoice === "paper" || computerchoice2 === "scissors" && UserChoice === "lizard" && computerchoice === "lizard" || computerchoice2 === "scissors" && UserChoice === "paper" && computerchoice === "lizard" || computerchoice2 === "scissors" && UserChoice === "lizard" && computerchoice === "paper"){
        win2();
    }
    if(computerchoice2 === "lizard" && UserChoice === "spock" && computerchoice === "spock" || computerchoice2 === "lizard" && UserChoice === "paper" && computerchoice === "paper" || computerchoice2 === "lizard" && UserChoice === "spock" && computerchoice === "paper" || computerchoice2 === "lizard" && UserChoice === "paper" && computerchoice === "spock"){
        win2();
    }
    if(computerchoice2 === "spock" && UserChoice === "scissors" && computerchoice === "scissors" || computerchoice2 === "spock" && UserChoice === "rock" && computerchoice === "rock" || computerchoice2 === "spock" && UserChoice === "scissors" && computerchoice === "rock" || computerchoice2 === "spock" && UserChoice === "rock" && computerchoice === "scissors"){
        win2();
    }
    else{
        draw();
    }
}
function win(){
    alert("You Win!");
    userpoints++;
}
function win1(){
    alert("AI1 Wins!");
    computerpoints++;
}
function win2(){
    alert("AI2 Wins!");
    computerpoints2++;
}
function draw(){
    alert("Draw");
}
