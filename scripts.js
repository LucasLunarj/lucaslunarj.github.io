function roll() {
  const dice = Math.round(Math.random() * 5 + 1);
  const dice2 = Math.round(Math.random() * 5 + 1);
  console.log(dice);
  document
    .querySelector("#dice")
    .setAttribute("src", "images/" + "dice" + dice + ".png");
  document
    .querySelector("#dice2")
    .setAttribute("src", "images/" + "dice" + dice2 + ".png");
  if (dice > dice2) {
    document.querySelector(".player1").innerHTML = `Player 1 Won`;
    document.querySelector(".player2").innerHTML = `Player 2`;
  } else if (dice2 > dice) {
    document.querySelector(".player2").innerHTML = `Player 2 Won`;
    document.querySelector(".player1").innerHTML = `Player 1`;
  } else {
    document.querySelector(".player2").innerHTML = `Draw`;
    document.querySelector(".player1").innerHTML = `Draw`;
  }
}
