
// (también podría ser un módulo de IIFE)
const loadAboutContent = function () {

    const contentContainer = document.querySelector("#content");

    const heading1 = document.createElement("h1");
    heading1.textContent = "ABOUT";

    const p = document.createElement("p");

    p.textContent = "We are a very nice company with very nice cocktails.\nThat's everything you need to know."

    contentContainer.append(heading1, p);

}

export { loadAboutContent };