'use strict';
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue.length > 0) { output.textContent = inputValue } else {output.textContent = "Anonymous"}
});