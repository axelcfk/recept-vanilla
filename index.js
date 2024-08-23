const likeButton = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCount");

let count = 0;

let uploadedImage = null;
const placeholderImage = "spaghetti-bolognese.jpg";

likeButton.addEventListener("click", function () {
  count++;
  likeCounter.textContent = count;
});

document.getElementById("image").addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    uploadedImage = file;
  }
});
document.getElementById("form").addEventListener("submit", function (e) {
  let valid = true;

  const image = uploadedImage;
  const name = document.getElementById("name").value;
  const ingredients = document.getElementById("ingredients").value;
  const instruction = document.getElementById("instruction").value;

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
});
