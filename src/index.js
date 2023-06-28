import './style.css';
import navigation from "./modules/navigation.js";
import Logo from './assets/Restaurant-logo.png';
import setupAppId from './modules/setupAppId.js';
import fetchMenuData from './modules/fetchMenuData.js';
import menuItem from './modules/menuItems.js';
import mealsCounter from './modules/mealsCounter.js';

setupAppId();
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

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "flex";
    const data = await fetchMenuData();
    preloader.style.display = "none";
    data.meals.forEach((meal) => {
      menuItem(meal);
    });
  } catch (error) {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
  }
});

const mealsCounterElement = document.querySelector(".meals-counter");

const displayCounter = async () => {
  const counter = await mealsCounter();
  mealsCounterElement.textContent = counter;
};

displayCounter();
