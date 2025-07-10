import cocktailImgSrc from "../img/cocktail.svg";

// (también podría ser un módulo de IIFE)
const loadMenuContent = function () {

    const cocktailArray = ["Cocktail 1", "Cocktail 2", "Cocktail 3", "Cocktail 4", "Cocktail 5", "Cocktail 6"];

    const contentContainer = document.querySelector("#content");

    const heading1 = document.createElement("h1");
    heading1.textContent = "MENU";

    const cocktailImg = document.createElement("img");
    cocktailImg.setAttribute("alt", "Cocktail vectorial image");
    cocktailImg.src = cocktailImgSrc;

    const list = document.createElement("ul");
    let listItem = null;

    for (let i = 0; i < 6; i++) {

        listItem = document.createElement("li");
        listItem.textContent = cocktailArray[i];

        list.appendChild(listItem);
    }

    contentContainer.append(heading1, cocktailImg, list);

}

export { loadMenuContent };