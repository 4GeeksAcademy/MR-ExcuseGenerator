/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  genExcuse();
  var button = document.getElementById("boton");
  button.addEventListener("click", genExcuse);
};

function genExcuse() {
  //let value= ["A","2","3","4","5","6","7","8","9","10","J","K","Q"];
  //let suits= ["Hearts", "Spades", "Clubs", "Diamonds"]

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  //let rvalue=value[Math.floor(Math.random() * value.length)];
  //let rsuits=suits[Math.floor(Math.random() * suits.length)];

  let rWho = who[Math.floor(Math.random() * who.length)];
  let rAction = action[Math.floor(Math.random() * action.length)];
  let rWhat = what[Math.floor(Math.random() * what.length)];
  let rWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${rWho} ${rAction} ${rWhat} ${rWhen}.`;

  console.log(excuse);
  document.getElementById("excuse").innerHTML = excuse;
}
