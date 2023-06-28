import './style.css';
import navigation from "./modules/navigation.js";
import Logo from "./assets/images.jpeg";

navigation();

const myIMage = new Image();
myIMage.src = Logo;
myIMage.alt = "logo";
myIMage.classList.add("top-logo");
const imageContainer = document.querySelector(".nav-logo");
imageContainer.appendChild(myIMage);