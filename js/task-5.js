'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const back = document.querySelector("body");
const newColor = document.querySelector(".color");

back.addEventListener("click", buttonClick);

function buttonClick(event) {
  back.style.backgroundColor = getRandomHexColor();
  newColor.textContent = back.style.backgroundColor;
}

