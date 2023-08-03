import "./style.css";
import {
    displayHome,
    displayHeader,
    displayMenu,
    displayContact,
    displayFooter,
} from "./functions";

const removeContent = () => {
    document.querySelectorAll("#content-container > *").forEach((e) => {
        e.remove();
    });
};

const registerButtons = () => {
    document.querySelectorAll(".header li")[0].addEventListener("click", () => {
        removeContent();
        displayHeader();
        displayHome();
        displayFooter();
        registerButtons();
    });
    document.querySelectorAll(".header li")[1].addEventListener("click", () => {
        removeContent();
        displayHeader();
        displayMenu();
        displayFooter();
        registerButtons();
    });
    document.querySelectorAll(".header li")[2].addEventListener("click", () => {
        removeContent();
        displayHeader();
        displayContact();
        displayFooter();
        registerButtons();
    });
};

displayHeader();
displayHome();
displayFooter();
registerButtons();
