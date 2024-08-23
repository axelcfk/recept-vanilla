

let uploadedImage = null;
const placeholderImage = "spaghetti-bolognese.jpg";
let searchedIngredients = null;
let searchedInstructions = null;
let searchedImage = null;


//funktion för att ladda upp bild. sparas i uploadedImage
document.getElementById("image").addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    //reader.readAsDataURL(file);

    //console.log(file);
    

    //uploadedImage = file;

    reader.onload = function(event) {
      uploadedImage = event.target.result; // Save the image as a data URL
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  }
});

const formEl = document.getElementById("form");

//funktion för att submitta formuläret
formEl.addEventListener("submit", function (e) {
  let valid = true;
  e.preventDefault();

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

  if (valid) {
    createRecipeCard(name, ingredients, instruction, image);

    //formEl.submit();
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


const recipeCardsContainer = document.getElementById("recipeCardsContainer");

function createRecipeCard ( name, ingredients, instruction, imgSrc = null ) {
  console.log(imgSrc);
  

  const newRecipeCard = document.createElement("div");
  newRecipeCard.className = "recipeCard";
  recipeCardsContainer.appendChild(newRecipeCard); // adds as last child

  const newFigure = document.createElement("figure");
  newRecipeCard.appendChild(newFigure);

  const newRecipeImgContainer = document.createElement("div");
  newRecipeImgContainer.className = "recipeImgContainer";
  newFigure.appendChild(newRecipeImgContainer);
  
  const newRecipeImg = document.createElement("img");
 // newRecipeImg.src = "public/spaghetti-bolognese.jpg" // change to imgSrc
 if (imgSrc == null) {

   newRecipeImg.src = "public/spaghetti-bolognese.jpg" // change to imgSrc
 } else {
  newRecipeImg.src = imgSrc // change to imgSrc

 }
  newRecipeImgContainer.appendChild(newRecipeImg);

  const newRecipeInfo = document.createElement("div");
  newRecipeInfo.className = "recipeInfo";
  newFigure.appendChild(newRecipeInfo);

  const newFigCaption = document.createElement("figcaption");
  newFigCaption.textContent = name; // name from props
  newRecipeInfo.appendChild(newFigCaption);

  const newIngredientsText = document.createElement("p");
  newIngredientsText.textContent = ingredients;
  newRecipeInfo.appendChild(newIngredientsText);

  const newInstructionText = document.createElement("p");
  newInstructionText.textContent = instruction;
  newRecipeInfo.appendChild(newInstructionText);

  /////// mickes like button 
  const newLikeBtn = document.createElement("button");
  newLikeBtn.className = "likeBtn";
  newLikeBtn.id = "likeBtn";
  newLikeBtn.textContent = "👍";

  const newLikeBtnCounter = document.createElement("span");
  newLikeBtnCounter.textContent = "0";
  newLikeBtn.appendChild(newLikeBtnCounter);
  
  let count = 0;
  newLikeBtn.addEventListener("click", function () {
    count++;
    newLikeBtnCounter.textContent = count;
  });
  newFigure.appendChild(newLikeBtn);
  ///////

  const newRemoveButton = document.createElement("button");
  newRemoveButton.textContent = "X";
//  newRemoveButton.style.color = "white";
  newFigure.appendChild(newRemoveButton);

  // info-icon... tänkte använda för att öppna upp en ny ruta med mer info...
  /* 
  const newIconContainer = document.createElement("div");
  newIconContainer.className = "iconContainer";
  newFigure.appendChild(newIconContainer);
  
  // SVG inte lätt att skapa med vanillaJS :) :) ... "info icon"
  const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // Set attributes for the SVG element
  newSvg.setAttribute("viewBox", "0 0 192 512");
  newSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  // Create the path element
  const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  // Set attributes for the path element
  newPath.setAttribute("d", "M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z");
  newPath.setAttribute("fill", "white");
  // Append the path to the SVG
  newSvg.appendChild(newPath);
  newIconContainer.appendChild(newSvg);
 */
  
}


