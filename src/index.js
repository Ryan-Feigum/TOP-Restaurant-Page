import { loadHomeModule } from './home_module.js';
import { loadMenuModule } from './menu_module.js';
import { loadAboutModule } from './about_module.js';

const homeButton = document.getElementById("home-btn");
homeButton.addEventListener("click", () => {
    loadHomeModule();
    console.log("Home button clicked");
});

const menuButton = document.getElementById("menu-btn");
menuButton.addEventListener("click", () => {
    loadMenuModule();
    console.log("Menu button clicked");
});

const aboutButton = document.getElementById("about-btn");
aboutButton.addEventListener("click", () => {
    loadAboutModule();
    console.log("About button clicked");
});