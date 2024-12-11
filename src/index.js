import { loadHomeModule } from './home_module.js';

const homeButton = document.getElementById("home-btn");
homeButton.addEventListener("click", () => {
    loadHomeModule();
    console.log("home button clicked");
});
