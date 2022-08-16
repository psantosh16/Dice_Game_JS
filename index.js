var randomNumber1 = [1, 2, 3, 4, 5, 6];
var player1 = Math.floor(Math.random() * randomNumber1.length) + 1;
var player2 = Math.floor(Math.random() * randomNumber1.length) + 1;


function randomDice() {
  if (player1 === 1 ) {
    document.getElementById("img1").src = "images/dice1.png";
  } else if (player1 === 2) {
    document.getElementById("img1").src = "images/dice2.png";
  } else if (player1 === 3) {
    document.getElementById("img1").src = "images/dice3.png";
  } else if (player1 === 4) {
    document.getElementById("img1").src = "images/dice4.png";
  } else if (player1 === 5) {
    document.getElementById("img1").src = "images/dice5.png";
  } else {
    document.getElementById("img1").src = "images/dice6.png";
  }

  if (player2 === 1) {
    document.getElementById("img2").src = "images/dice1.png";
  } else if (player2 === 2) {
    document.getElementById("img2").src = "images/dice2.png";
  } else if (player2 === 3) {
    document.getElementById("img2").src = "images/dice3.png";
  } else if (player2 === 4) {
    document.getElementById("img2").src = "images/dice4.png";
  } else if (player2 === 5) {
    document.getElementById("img2").src = "images/dice5.png";
  } else {
    document.getElementById("img2").src = "images/dice6.png";
  }


}

function changeTitle(){
    if(player1>player2){
       document.getElementById("h1").innerHTML= "🚩 Player 1 Wins !!";
       document.getElementById("h1").style.fontSize= "80px";

    }else if(player1<player2){
        document.getElementById("h1").innerHTML= "Player 2 Wins !! 🚩";
       document.getElementById("h1").style.fontSize= "80px";

    }else{
        document.getElementById("h1").innerHTML= "Draw !";
       document.getElementById("h1").style.fontSize= "80px";

    }
}

console.log(randomDice());
console.log(changeTitle());
