/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");

const agent = session(app);
const recipe = {
  recipe: {
    name: "Tortillas para taco",
    id: "d46ee70c-2a31-4b03-9347-c7728f593766",
    summary:
      "para realizar unas tortillas para burritos o tacos es necesario harina, agua, sal, royal y aceite.",
    healthScore: 60,
    steps: [{ value: "paso1" }],
  },
  diets: ["Vegan"],
};

describe("Recipe routes", function () {
  before(function () {
    conn.authenticate().catch(function (err) {
      console.error("Unable to connect to the database:", err);
    });
  });

  it("Should return 200", function () {
    agent.get("/recipes").expect(200);
  });

  describe("GET /recipes?name", function () {
    beforeEach(async function () {
      await Recipe.sync({ force: true });
      await Recipe.create(recipe.recipe);
    });

    it("Should return recipes with the provided name through query", function () {
      return agent
        .get("/recipes?name=Tortillas para taco")
        .then(function (res) {
          expect(res.statusCode).to.be.eql(200);
          expect(res.body).to.be.eqls([
            {
              name: "Tortillas para taco",
              id: "d46ee70c-2a31-4b03-9347-c7728f593766",
              image: null,
              healthScore: 60,
              diets: [],
            },
          ]);
        });
    });

    it("Should return a message if dont exist a recipe with the provided name", function () {
      return agent.get("/recipes?name=receta inexistente").then(function (res) {
        expect(res.statusCode).to.be.eql(404);
        expect(res.text).to.be.eql("No se encontraron recetas");
      });
    });
  });

  describe("GET /recipes/:idReceta", function () {
    beforeEach(async function () {
      await Recipe.sync({ force: true });
      await Recipe.create(recipe.recipe);
    });

    it("Should return details of the recipe with the gave id", function () {
      return agent
        .get("/recipes/d46ee70c-2a31-4b03-9347-c7728f593766")
        .then(function (res) {
          expect(res.body).to.haveOwnProperty(
            "id",
            "d46ee70c-2a31-4b03-9347-c7728f593766"
          );
          expect(res.body).to.have.keys([
            "name",
            "id",
            "summary",
            "image",
            "healthScore",
            "steps",
            "diets",
          ]);
        });
    });

    it("Should return a message if dont exist a recipe with the provided name", function () {
      return agent.get("/recipes/receta inexistente").then(function (res) {
        expect(res.statusCode).to.be.eql(404);
        expect(res.text).to.be.eql("No existe la receta solicitada");
      });
    });
  });

  describe("POST /recipes", function () {
    beforeEach(async function () {
      await Recipe.sync({ force: true });
    });

    it("Should return status 201 and confirmation message", function () {
      return agent
        .post("/recipes")
        .send(recipe)
        .then(function (res) {
          expect(res.text).to.be.eql("Receta creada correctamente!");
        });
    });
  });
});
