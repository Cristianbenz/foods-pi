# Individual Project - Linguini's Recipes

It's a web in wich you can look diferent kind of recipes and get information like step by step, healthscore and a summary. At the home, there are some options to sort the results by alphabetic or healthscore and filter by kind of diet. Also you can create your own recipes.

## Technologies
Project made with:
- React Js.
- Styled Components.
- Redux.
- Express.
- Psql.

## Frontend

Made with React Js, Redux for the global state and Styled Components for the styles.

__Home__:

It has a search bar to find recipes by name, a filter and a section in wich displays 9 results of recipes. You can get the next or the previous 9 results, filter by kind of diet and sort by alphabetic or healthscore.

__Details__:

Section that shows information like name, health score, kind of diets, summary and step by steps of an especific recipe. 

__Create Recipe__:

Has a controlled form that recollect the necessary information to create a recipe entity. Also has a recipe card that shows live modifications.

## Database

Made with PSQL and Sequelize

- Recipe model:
  - ID (null: false, primaryKey)
  - Name (null: false)
  - Summary (null: false)
  - HealthScore (min: 1, max: 100)
  - Step by Step
- Diet model:
  - ID (primaryKey)
  - Name (null: false)

## Backend

Server with Node and Express:

- __GET /recipes__: Bring a list of the all recipes in the database.
- __GET /recipes?name="..."__: Bring a list of recipes that includes the name given by query parameter.
- __GET /recipes/:recipeId__: Bring the details of an especific recipe.
- __POST /recipes__: Create a recipe entity with the information obtained through a controlled form.
- __GET /diets__: Bring all kind of recipes in the database.

## Testing

- Tests for database models.
- Tests for server routes.
