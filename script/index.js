var p1Input = document.querySelector(".firstPlayer"),
    p2Input = document.querySelector(".secondPlayer"),
    p1Title = document.getElementsByClassName("player1"),
    p2Title = document.getElementsByClassName("player2"),
    vs = document.getElementsByClassName("vs")[0];
    dice1 = document.querySelector(".dice1"),
    dice2 = document.querySelector(".dice2");

p1Input.addEventListener("input", updateValue1);
p2Input.addEventListener("input", updateValue2);

function updateValue1(){
 p1Title[0].innerHTML = p1Input.value;
 p1Title[1].innerHTML = p1Input.value;
 vs.textContent = " vs ";
}

function updateValue2(){
  p2Title[0].innerHTML = p2Input.value;
  p2Title[1].innerHTML = p2Input.value; 
  vs.textContent = " vs ";
 }

function shakeDice(){
  var music = document.querySelector(".diceThrow");
  music.play();
  generateWinner();
}

function generateWinner(){
  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;

  var winner;
  if(random1 > random2){
    winner = 1;
  }else if(random1 < random2){
    winner = 2;
  }else{
    winner = 0;
  }

  random1 = "./assets/" + random1 + ".png";
  random2 = "./assets/" + random2 + ".png";

  dice1.setAttribute("src", random1);
  dice2.setAttribute("src", random2);

  var p1Name = p1Input.value, p2Name = p2Input.value;
  if(p1Input.value === "")
    p1Name = "Player 1";
  if(p2Input.value === "")
    p2Name = "Player 2";


  if(winner == 1){
    p1Title[0].textContent = "👑 " + p1Name;
    vs.textContent = " wins";
    p2Title[0].textContent = " the match 🏁";

    p1Title[1].textContent = "👑 " + p1Name;
    p2Title[1].textContent = "😰 " + p2Name;
  }else if(winner == 2){
    p1Title[0].textContent = "👑 " + p2Name;
    vs.textContent = " wins";
    p2Title[0].textContent = " the match 🏁";

    p2Title[1].textContent = "👑 " + p2Name;
    p1Title[1].textContent = "😰 " + p1Name;
  }else{
    p1Title[0].textContent = "Match ";
    p1Title[1].textContent = "😓 " + p1Name;
    vs.textContent = "🤝";
    p2Title[0].textContent = " Draw";
    p2Title[1].textContent = "😓 " + p2Name;
  }
}
 