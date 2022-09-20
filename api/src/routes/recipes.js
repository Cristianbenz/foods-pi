const { Router } = require("express");
const { Recipe, Diet, Op } = require("../db");
const {
  getRecipeList,
  getRecipeDetails,
  recipeDataValidation,
} = require("./utils");

const router = Router();

router.get("/", async (req, res) => {
  try {
    let result = await getRecipeList({ ...req.query });
    if (result.length < 1) {
      return res.status(404).send("No se encontraron recetas");
    }
    res.json(result);
  } catch (error) {
    res.status(400);
  }
});

router.get("/:recetaId", async (req, res) => {
  const { recetaId } = req.params;
  try {
    let recipe = await getRecipeDetails(recetaId);
	if(!recipe) return res.status(404).send('No existe la receta solicitada')
    res.json(recipe);
  } catch (error) {
    res
      .status(400)
      .send(error);
  }
});

router.post("/", async (req, res) => {
  const { recipe, diets } = req.body;

  const error = recipeDataValidation(recipe);
  error && res.status(400).send("Faltan datos requeridos");
  try {
    const newRecipe = await Recipe.create(recipe);
    const searchDiets = diets.length && await Diet.findAll({
      where: {
        name: {
          [Op.or]: diets.map((el) => el),
        },
      },
      attributes: ["id"],
    });
    newRecipe.addDiets(searchDiets);

    res.status(201).send("Receta creada correctamente!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
