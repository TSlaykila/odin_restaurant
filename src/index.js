import "./styles.css";
import { loadHome } from "./home.js"
import { loadMenu } from './menu.js';
import { loadAbout } from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    // Load the home page by default
    loadHome();

    document.getElementById("home-btn").addEventListener("click", () => {
        loadHome();
    });

    document.getElementById("menu-btn").addEventListener("click", () => {
        loadMenu();
    });

    document.getElementById("about-btn").addEventListener("click", () => {
        loadAbout();
    });
});