const axios = require("axios");
require("dotenv").config();
const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;

// const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
// key1 aa744f5fc8b64f3391f874517678699d
const API = "https://api.spoonacular.com/";
const LIST_URL = `${API}recipes/complexSearch?apiKey=aa744f5fc8b64f3391f874517678699d&addRecipeInformation=true&limit=100`;

async function preloadDiets() {
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
  ].map((el) => {
    return { name: el };
  });

  Diet.bulkCreate(diets);
}

async function getApiRecipes(flags) {
  try {
    let get = await axios(LIST_URL);
    let results = get.data.results;

    if (flags.name && get.data) {
      results = get.data?.results.filter((recipe) => {
        return recipe.title.toLowerCase().includes(flags.name.toLowerCase());
      });
    }

    if (results)
      return results.map((recipe) => {
        return {
          id: recipe.id,
          image: recipe.image,
          name: recipe.title,
          healthScore: recipe.healthScore,
          diets: recipe.diets,
        };
      });
  } catch (error) {
      return;
  }
}

async function getDbRecipes(flags) {
  let where = flags.name && { name: flags.name };

  let options = {
    where,
    attributes: ["name", "id", "image", "healthScore"],
    include: Diet,
  };

  try {
    let results = await Recipe.findAll(options);
    return results;
  } catch (error) {
    return;
  }
}

async function getRecipeList(flags) {
  try {
    const dbRecipes = await getDbRecipes(flags)
    const apiRecipes = await getApiRecipes(flags)
    return [...dbRecipes, ...apiRecipes]
    
  } catch (error) {
    throw Error(error);
  }
}

async function getByIdAtApi(id) {
  try {
    let response = await axios(
      `${API}recipes/${id}/information?includeNutrition=false&apiKey=aa744f5fc8b64f3391f874517678699d`
    );
    let recipe = response.data;
    return {
      image: recipe.image,
      name: recipe.title,
      healthScore: recipe.healthScore,
      diets: recipe.diets,
      summary: recipe.summary,
      steps: recipe.analyzedInstructions[0].steps.map((el) => el.step),
    };
  } catch (error) {
    throw Error(error);
  }
}

async function getByPkDb(id) {
  try {
    let recipe = await Recipe.findByPk(id, {
      include: {
        model: Diet,
        through: {
          attributes: ["name"],
        },
      },
    });
    return recipe;
  } catch (e) {
    return undefined;
  }
}

async function getRecipeDetails(recetaId) {
  try {
    return await getByPkDb(recetaId) || await getByIdAtApi(recetaId);
  } catch (error) {
    throw Error(error);
  }
}

function recipeDataValidation(body) {
  if (!body.name || !body.summary) return true;

  return false;
}

module.exports = {
  preloadDiets,
  getRecipeList,
  getRecipeDetails,
  recipeDataValidation,
};
