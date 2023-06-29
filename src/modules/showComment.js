import fetchComments from "./fetchComments.js";
import countComments from "./commentCounter.js";

const showCommentModal = (data, menuSection, commentButton, commentCount) => {
  const dialog = document.createElement("dialog");
  dialog.classList.add("comment-modal");
  const header = document.createElement("div");
  header.classList.add("comment-modal-header");
  const heading = document.createElement("h3");
  heading.textContent = data.strMeal;
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-modal");
  const closeIcon = document.createElement("i");
  closeIcon.classList.add("fa-solid", "fa-times");
  closeButton.appendChild(closeIcon);
  header.appendChild(heading);
  header.appendChild(closeButton);
  const body = document.createElement("div");
  body.classList.add("comment-modal-body");
  const content = document.createElement("div");
  content.classList.add("comment-modal-body-content");
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("comment-modal-body-content-image");
  const image = document.createElement("img");
  image.classList.add("dialog-image");
  image.src = data.strMealThumb;
  image.alt = data.idMeal;
  imageContainer.appendChild(image);
  content.appendChild(imageContainer);
  const area = document.createElement("button");
  area.classList.add("content-area");
  area.textContent = `area: ${data.strArea}`;
  content.appendChild(area);
  const textContainer = document.createElement("div");
  textContainer.classList.add("comment-modal-content");

  const populateComments = async () => {
    const comments = await fetchComments(data.idMeal);
    textContainer.innerHTML = "";
    comments.forEach((com) => {
      const userCommentContainer = document.createElement("div");
      userCommentContainer.classList.add("user-comment-container");
      const date = document.createElement("p");
      date.classList.add("comment-date");
      date.textContent = `${com.creation_date} - `;
      const nameParagraph = document.createElement("p");
      nameParagraph.classList.add("comment-modal-name");
      nameParagraph.textContent = `${com.username} : `;
      const commentParagraph = document.createElement("p");
      commentParagraph.classList.add("comment-modal-comment");
      commentParagraph.textContent = com.comment;
      userCommentContainer.append(date, nameParagraph, commentParagraph);
      textContainer.appendChild(userCommentContainer);
    });
  };

  content.appendChild(textContainer);
  body.appendChild(content);
  const footer = document.createElement("div");
  footer.classList.add("comment-modal-footer");
  const form = document.createElement("form");
  form.action = "";
  form.classList.add("comment-modal-form");
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Username";
  nameInput.name = "username";
  nameInput.id = "username";
  nameInput.classList.add("username");
  nameInput.required = true;
  const commentTextarea = document.createElement("textarea");
  commentTextarea.name = "comment";
  commentTextarea.id = "user-comment";
  commentTextarea.cols = "30";
  commentTextarea.rows = "3";
  commentTextarea.placeholder = "Comment";
  commentTextarea.classList.add("user-comment");
  commentTextarea.required = true;
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.classList.add("submit-comment");
  form.appendChild(nameInput);
  form.appendChild(commentTextarea);
  form.appendChild(submitButton);
  footer.appendChild(form);
  dialog.appendChild(header);
  dialog.appendChild(body);
  dialog.appendChild(footer);
  menuSection.appendChild(dialog);

  const submitComment = dialog.querySelector(".comment-modal-form");
  submitComment.addEventListener("submit", async (event) => {
    event.preventDefault();
    const commentData = {
      item_id: data.idMeal,
      username: event.target.username.value,
      comment: event.target.comment.value,
    };
    try {
      const appId = localStorage.getItem("app_id");
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }
      form.reset();
      const updatedComments = await fetchComments(data.idMeal);
      populateComments(updatedComments);
      const count = await countComments(data.idMeal);
      commentCount.textContent = count;
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  });
  commentButton.addEventListener("click", () => {
    dialog.showModal();
    fetchComments(data.idMeal)
      .then((comments) => {
        console.log("loaded comments:", comments);
        populateComments(comments);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  });
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
};
export default showCommentModal;
