const likeButton = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCount");

let count = 0;

let uploadedImage = null;
const placeholderImage = "spaghetti-bolognese.jpg";
let searchedIngredients = null;
let searchedInstructions = null;
let searchedImage = null;

likeButton.addEventListener("click", function () {
  count++;
  likeCounter.textContent = count;
});

//funktion för att ladda upp bild. sparas i uploadedImage
document.getElementById("image").addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    uploadedImage = file;
  }
});

//funktion för att submitta formuläret
document.getElementById("form").addEventListener("submit", function (e) {
  let valid = true;

  const image = uploadedImage;
  const name = document.getElementById("name").value;
  const ingredients = document.getElementById("ingredients").value;
  const instruction = document.getElementById("instruction").value;

  if (name === "" || ingredients === "" || instruction === "") {
    valid = false;
    const error = document.createElement("p");
    error.textContent = "All fields are required";

    const form = document.getElementById("form");
    form.appendChild(error);
  }

  if (!valid) {
    e.preventDefault();
  }
});

//funktion för att söka på recept
document
  .getElementById("searchButton")
  .addEventListener("click", async function () {
    const searchName = document.getElementById("search").value;

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
    );
    const data = await response.json();
    console.log(data);
    const instructions = data.meals[0].strInstructions;
    const meal = data.meals[0];
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`.trim());
      }
    }

    searchedIngredients = ingredients;
    searchedInstructions = instructions;
    searchedImage = meal.strMealThumb;

    console.log("ingredients are:", ingredients);
    console.log("Instructions are:", instructions);
  });
