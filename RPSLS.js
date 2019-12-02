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

