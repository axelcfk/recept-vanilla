const likeButton = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCount");

let count = 0;

likeButton.addEventListener("click", function () {
  count++;
  likeCounter.textContent = count;
});