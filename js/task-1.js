'use strict';
const ulCategories = document.querySelector("#categories");
const categories = ulCategories.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((item) => {
    const categoryTitle = item.querySelector("h2");
    const categoryElements = item.querySelectorAll("ul li");
    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryElements.length}`)
})