
 // selects rock 
 function selectRock() {
    document.getElementById("info").innerText = "You selected ROCK"
    document.getElementById("rock").src = "imgs/rock-select.png";
    document.getElementById("paper").src = "imgs/paper-neutral.png";
    document.getElementById("scissors").src = "imgs/scissors-neutral.png";
 }
 
 // selects paper 
 function selectPaper() {
     document.getElementById("info").innerText = "You selected PAPER"
     document.getElementById("paper").src = "imgs/paper-select.png";
     document.getElementById("rock").src = "imgs/rock-neutral.png";
     document.getElementById("scissors").src = "imgs/scissors-neutral.png";
 }
 
 // selects scissors 
 function selectScissors() {
     document.getElementById("info").innerText =  "You selected SCISSORS"
     document.getElementById("scissors").src = "imgs/scissors-select.png";
     document.getElementById("paper").src = "imgs/paper-neutral.png";
     document.getElementById("rock").src = "imgs/rock-neutral.png";
 }
