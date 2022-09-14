const diceImgs = document.querySelectorAll(".diceImg");
let winnerImg = document.getElementById("title");

for (let i = 0; i < diceImgs.length; i++) {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let diceName = `./images/dice${randomNumber1}.png`;
  console.log(diceName);
  diceImgs[i].setAttribute("src", diceName);
}
