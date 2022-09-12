const axios = require("axios");
require("dotenv").config();
const { Recipe, Diet } = require('../db')
const { API_KEY } = process.env;

// const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`

const LIST_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=42997e25cd1242449b9cdd4037222a95&addRecipeInformation=true&limit=100`;
const DETAILS_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=42997e25cd1242449b9cdd4037222a95&addRecipeInformation=true&limit=100`;

function preloadDiets() {
  const diets = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
  ].map((el) => {return { name: el}});

  Diet.bulkCreate(diets);
}

async function getApiRecipes() {
  try {
    let results = await axios(LIST_URL)
    return results.data?.results.map((recipe) => {
      return {
        image: recipe.image,
        name: recipe.name,
        healthScore: recipe.healthScore,
        diets: recipe.diets
      };
    });
  } catch (error) {
      return
  }
}

async function getDbRecipes() {
  try {
    let results = await Recipe.findAll();
    return results.map((recipe) => {
      return {
        image: recipe.image,
        name: recipe.name,
        healthScore: recipe.healthScore,
        diets: recipe.diets
      };
    });
  } catch (error) {
      return
  }
}

function getRecipeList() {
  try {
    return [...getDbRecipes().concat(getApiRecipes())] 
  } catch (error) {
      console.log(error)
  }
}

async function getByIdAtApi(id) {
  let recipe = await axios(`https://api.spoonacular.com/recipes/${id}/information`).data
  return {
    image: recipe.image,
    name: recipe.name,
    healthScore: recipe.healthScore,
    diets: recipe.diets,
    summary: recipe.summary,
    steps: recipe.analyzedInstructions[0].steps.map(el => el.step)
  }
}

async function getByPkDb(id) {
  let recipe = await Recipe.findByPk(id, { include: Recipe })
  return recipe
}

function getRecipeDetails(recetaId) {
  return getByPkDb(recetaId) || getByIdAtApi(recetaId)
}

function recipeDataValidation(body) {
  if(!body.name || !body.summary ) return true

  return false
}

module.exports = {
  preloadDiets,
	getRecipeList,
  getRecipeDetails,
  recipeDataValidation
};
