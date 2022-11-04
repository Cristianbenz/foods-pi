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
  const { filter='' } = flags
  const { options='' } = flags
  
  const { name, diets } = filter
  const { sortType='', sortDirection='', page=1 } = options
  const order = options?.sortType && options?.sortDirection && [[sortType, sortDirection.toUpperCase()]];
  const where = {}
  const DietsWhere = {}

  if(name) {
    where.name = {
      [Op.iLike]: `%${name}%`
    }
  }

  if(diets) {
    const dietsArr = diets.split(',')
    DietsWhere.name = {
      [Op.or]: dietsArr.map(el => ({[Op.iLike]: el}))
    }
  }


  let config = {
    distinct: true,
    where,
    attributes: ["name", "id", "image", "healthScore"],
    include: {
      model: Diet,
      where: DietsWhere,
    },
    order,
    offset: (page - 1) * 9,
    limit: 9
  };

  return { count, rows } = await Recipe.findAndCountAll(config);
}

async function getRecipeDetails(id) {
  try {
    let recipe = await Recipe.findOne({where:{id}, include: Diet});
    return recipe;
  } catch (e) {
    return undefined;
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
