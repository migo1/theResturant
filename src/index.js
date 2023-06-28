import './style.css';
import navigation from "./modules/navigation.js";
import Logo from './assets/Restaurant-logo.png';

navigation();
const myIMage = new Image();
myIMage.src = Logo;
myIMage.alt = "logo";
myIMage.classList.add("top-logo");
const imageContainer = document.querySelector(".nav-logo");
imageContainer.appendChild(myIMage);

const footerImage = new Image();
footerImage.src = Logo;
footerImage.alt = "logo";
footerImage.classList.add("footer-logo");
const footerImageContainer = document.querySelector(".footer-img");
footerImageContainer.appendChild(footerImage);
