import './style.css';
import navigation from "./modules/navigation.js";
import Logo from './assets/Restaurant-logo.png';
import setupAppId from './modules/setupAppId.js';
import fetchMenuData from './modules/fetchMenuData.js';
import menuItem from './modules/menuItems.js';

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
    // Show a preloader while fetching the data
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "flex";

    // Fetch the meal data
    const data = await fetchMenuData();

    // Hide the preloader after the data is fetched
    preloader.style.display = "none";

    // Use the fetched data
    // console.log("Returned data:", data.meals);

    // Process the data or perform other operations
    data.meals.forEach((meal) => {
      menuItem(meal);
    });
  } catch (error) {
    // Handle any errors that occurred during the API call
    // console.error("Error:", error);

    // Hide the preloader in case of an error
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
  }
});