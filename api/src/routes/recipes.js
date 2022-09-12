const { Router } = require("express");
const { Recipe, Diet, Op } = require("../db");
const { getRecipeList, getRecipeDetails, recipeDataValidation } = require("./utils");

const router = Router();

router.get("/", (req, res) => {
	try {
		let result = getRecipeList()
		res.json(result)
	} catch (error) {
			res.status(404).send('No se encontraron recetas con ese nombre')
	}
});

router.get("/:recetaId", (req, res) => {
  const { recetaId } = req.params;

  try {
    let recipe = getRecipeDetails(recetaId);
		res.json(recipe)
  } catch (error) {
			res.status(404).send("El codigo proveido no corresponde a una receta existente");
	}
});

router.post("/", async (req, res) => {
  const { recipe, diets } = req.body;

	const error = recipeDataValidation(recipe)
	error && res.status(400).send('Faltan datos requeridos')

	try {
		const newRecipe = await Recipe.create(recipe);
		const searchDiets = await Diet.findAll({
			where: {
				name: {
					[Op.or]: diets.map((el) => {return {el} }),
				},
			},
			attributes: ["id"],
		});

		newRecipe.addDiets(searchDiets);

		res.status(201).send('Receta creada correctamente!')
	} catch (error) {
			res.status(400).send(error.message)
	}

  
});

module.exports = router;
