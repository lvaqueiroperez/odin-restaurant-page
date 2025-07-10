import "./styles.css";
import { loadHomeContent } from "./home.js";
import { loadMenuContent } from "./menu.js";

console.log("aaaa");
loadHomeContent();

function removeContent() {
    Array.from(document.querySelector("#content").children).forEach((child) => {
        child.remove();
    });
}

document.querySelector("ul").addEventListener("click", (e) => {

    switch (e.target.id) {
        case "home":
            removeContent();
            loadHomeContent();
            break;

        case "menu":
            removeContent();
            loadMenuContent();
            break;

        case "about":

            break;
    }

});