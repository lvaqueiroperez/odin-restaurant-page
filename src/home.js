import pinhaImgSrc from "../img/pinhaColada.jpg";

// (también podría ser un módulo de IIFE)
const loadHomeContent = function () {

    const contentContainer = document.querySelector("#content");

    const heading2 = document.createElement("h2");
    heading2.textContent = "Welcome to";

    const heading1 = document.createElement("h1");
    heading1.textContent = "Piña Colada Restaurant";

    const pinhaImg = document.createElement("img");
    pinhaImg.setAttribute("alt", "Piña Colada Restaurant image");
    pinhaImg.src = pinhaImgSrc;

    const p = document.createElement("p");
    p.textContent = "Piña Colada Restaurant has been offering the best cool and tasty drinks since 1992 and, yes, piña colada is our specialty."

    contentContainer.append(heading2, heading1, pinhaImg, p);

}

export { loadHomeContent };