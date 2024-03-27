/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#newExcuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let actorInvolved = [
    "My cute little dog",
    "My sweet grandma",
    "My neighbor's stupid rabbit",
    "My noisy parrot",
    "My stupid english teacher"
  ];
  let actionPerformed = [
    "destroyed",
    "peed on",
    "chewed",
    "fell asleep on",
    "accidentally killed a pigeon with"
  ];
  let objectUsed = [
    "my math book",
    "my bike's keys",
    "my girlfriend's car",
    "an old cactus",
    "a cristal skull"
  ];
  let moment = [
    "right after the earthquake",
    "before I asked for help",
    "during the wedding",
    "after my rich friend's pet's funeral",
    "while I was in my Tap Dancing Classes",
    "at lunch time on Taco Tuesday"
  ];

  function genRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  return (
    actorInvolved[genRandomIndex(actorInvolved)] +
    " " +
    actionPerformed[genRandomIndex(actionPerformed)] +
    " " +
    objectUsed[genRandomIndex(objectUsed)] +
    " " +
    moment[genRandomIndex(moment)]
  );
};
