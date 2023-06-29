import showCommentModal from "./showComment.js";
import getLikes from "./getLikes.js";
import postLikes from "./postLikes.js";
import countComments from "./commentCounter.js";
import totalComments from "./totalComments.js";

const menuItem = (data) => {
  const menuSection = document.getElementById("menu");
  const menuCardContainer = document.createElement("div");
  menuCardContainer.classList.add("menu-card");

  const menuCardImage = document.createElement("div");
  menuCardImage.classList.add("menu-card-image");

  const image = document.createElement("img");
  image.src = data.strMealThumb;
  image.alt = data.idMeal;

  menuCardImage.appendChild(image);

  const mealName = document.createElement("h3");
  mealName.classList.add("meal-name");
  mealName.textContent = data.strMeal;

  const menuCardContent = document.createElement("div");
  menuCardContent.classList.add("menu-card-content");

  const heartSpan = document.createElement("span");
  heartSpan.classList.add("heart");
  const countSpan = document.createElement("span");
  heartSpan.addEventListener("click", () => {
    heartSpan.classList.toggle("clicked");
    setTimeout(() => {
      heartSpan.classList.remove("clicked");
    }, 500);
    postLikes(data.idMeal, countSpan);
  });
  const heartIcon = document.createElement("i");
  heartIcon.classList.add("fa-solid", "fa-heart");
  countSpan.classList.add("count");

  getLikes(data.idMeal).then((likes) => {
    countSpan.textContent = likes;
  });

  heartSpan.appendChild(heartIcon);
  heartSpan.appendChild(countSpan);

  const commentButton = document.createElement("button");
  commentButton.classList.add("comment");
  commentButton.textContent = "Comment";
  const commentCount = document.createElement("span");
  commentCount.classList.add("comment-count");
  const updateCommentCount = async () => {
    const count = await countComments(data.idMeal);
    totalComments(commentCount, count);
  };
  commentButton.addEventListener("click", showCommentModal(data, menuSection, commentButton, commentCount));

  commentButton.appendChild(commentCount);
  menuCardContent.appendChild(heartSpan);
  menuCardContent.appendChild(commentButton);

  menuCardContainer.appendChild(menuCardImage);
  menuCardContainer.appendChild(mealName);
  menuCardContainer.appendChild(menuCardContent);

  menuSection.appendChild(menuCardContainer);
  updateCommentCount();
};

export default menuItem;
