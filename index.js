const likeButton = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCount");

let count = 0;

likeButton.addEventListener("click", function () {
  count++;
  likeCounter.textContent = count;
});document.getElementById("form").addEventListener("submit", function (e) {
  let valid = true;

  const name = document.getElementById("name").value;
  const ingredients = document.getElementById("name").value;
  const instruction = document.getElementById("name").value;

  if (name || ingredients || instruction === "") {
    valid = false;
    const error = document.createElement("h3");
    error.textContent = "All fields are required";

    const form = document.getElementById("form");
    form.appendChild(error);
  }

  if (!valid) {
    e.preventDefault();
  }

  const header = document.querySelector("figure div:nth-of-type(2) figcaption");
  header.textContent = name;

  const page = document.getElementById("body");
  page.appendChild();
});
