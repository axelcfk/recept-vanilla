
document.getElementById("form").addEventListener("submit", function (e) {
  let valid = true;

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

  createRecipeCard(name, ingredients, instruction); // imgSrc?
  const header = document.querySelector("figure div:nth-of-type(2) figcaption");
  header.textContent = name;

  const page = document.getElementById("body");
  page.appendChild();
});

const recipeCardsContainer = document.getElementById("recipeCardsContainer");

function createRecipeCard ( name, ingredients, instruction, imgSrc = null ) {

  const newRecipeCard = document.createElement("div");
  newRecipeCard.className = "recipeCard";
  recipeCardsContainer.appendChild(newRecipeCard); // adds as last child

  const newFigure = document.createElement("figure");
  newRecipeCard.appendChild(newFigure);

  const newRecipeImgContainer = document.createElement("div");
  newRecipeImgContainer.className = "recipeImgContainer";
  newFigure.appendChild(newRecipeImgContainer);
  
  const newRecipeImg = document.createElement("img");
  newRecipeImg.src = "public/spaghetti-bolognese.jpg" // change to imgSrc
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


