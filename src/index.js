import "./styles.css";
import { loadHomeContent } from "./home.js";

console.log("aaaa");
loadHomeContent();

document.querySelector("ul").addEventListener("click", (e) => {

    switch (e.target.id) {
        case "home":

            break;

        case "menu":

            break;

        case "about":

            break;
    }

});