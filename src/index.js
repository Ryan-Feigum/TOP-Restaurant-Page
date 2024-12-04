console.log("It's working!!");
import { loadHomeModule } from './src/home_module';

const homeButton = getElementById("home-btn");
homeButton.addEventListener("click", () => {
    loadHomeModule();
});
