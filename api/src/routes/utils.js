const axios = require("axios");
const { Recipe, Diet, Op } = require("../db");
const RECIPES = require('../../recipes.json')
async function preloadDiets() {
  const diets = [
    "Gluten Free",
    "Dairy Free",
    "Ketogenic",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Lacto Ovo Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleolithic",
    "Primal",
    "Low FODMAP",
    "Whole 30",
  ].map((el) => {
    return { name: el };
  });
  Diet.bulkCreate(diets);
}

async function preLoadRecipes() {
  RECIPES.forEach(async recipe => {
    const {name, image, summary, healthScore, analyzedInstructions, diets} = recipe
    const steps = analyzedInstructions[0]?.steps.map(el => el.step)
    const newRecipe = await Recipe.create({
      name,
      image,
      summary,
      healthScore,
      steps
    })
    const findDiets = await Diet.findAll({
      where: {
        name: {
          [Op.or]: diets.map(el => ({[Op.iLike]: el}))
        }
      }
    })
    await newRecipe.addDiets(findDiets)
  });
}

async function getDbRecipes(flags) {
  let where = flags.name && { name: {
    [Op.substring]: flags.name
  } };

  let options = {
    where,
    attributes: ["name", "id", "image", "healthScore"],
    include: Diet,
  };

  try {
    let results = await Recipe.findAll(options);
    return results;
  } catch (error) {
    return [];
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
      `${API}recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
    );
    let recipe = response.data;
    return {
      image: recipe.image,
      name: recipe.title,
      healthScore: recipe.healthScore,
      diets: recipe.diets,
      summary: recipe.summary.replace(/<[^>]*>/g, ''),
      steps: recipe.analyzedInstructions[0].steps.map((el) => el.step),
    };
  } catch (error) {
    return undefined;
  }
}

async function getByPkDb(id) {
  try {
    let recipe = await Recipe.findByPk(id, {include: Diet});
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
  preLoadRecipes,
  getRecipeList,
  getRecipeDetails,
  recipeDataValidation,
};
