/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");

const agent = session(app);
const recipe = {
  id: 'hjku44',
  name: "Milanesa a la napolitana",
  resume: '',
  healtScore: 4,
  steps: '',
  kindOfDiet: [
    1
  ]
};

describe("Recipe routes", () => {
  before(() => {
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  });

  xit("Should return 200", () => expect(agent.get("/recipes")).to.be(200));

  describe("GET /recipes?name", () => {
    beforeEach(() => {
      Recipe.sync({ force: true })
      Recipe.create(recipe)
    });

    xit("Should return recipes with the provided name through query", () => {
      return agent.get('/recipes?name=milanesa a la napolitana')
      .then(res => {
        expect(res.body.toJSON()).to.haveOwnProperty('name', 'Milanesa a la napolitana')
      })
    });

    xit('Should return a message if dont exist a recipe with the provided name', () => {
      return agent.get('/recipes?name=receta inexistente')
        .then(res => {
          expect(res.statusCode).to.be(404)
          expect(res.text).to.be.equal('No existen recetas con el nombre: receta inexistente')
        })
    });

  });

  describe("GET /recipes/:idReceta", () => {
    beforeEach(() => {
      Recipe.sync({ force: true })
      Recipe.create(recipe)
    });

    xit("Should return details of the recipe with the gave id", () => {
      return agent.get('/recipes/hjku44')
      .then(res => {
        expect(res.body.toJSON()).to.haveOwnProperty('id', 'hjku44')
        expect(res.body.toJSON()).to.have.keys(['name', 'resume', 'image', 'healtScore', 'steps', 'kindOfDiet'])
      })
    });

    xit('Should return a message if dont exist a recipe with the provided name', () => {
      return agent.get('/recipes?name=receta inexistente')
        .then(res => {
          expect(res.statusCode).to.be(404)
          expect(res.text).to.be.equal('No existen recetas con el nombre: receta inexistente')
        })
    });

  });

  describe("POST /recipes", () => {
    beforeEach(() => {
      Recipe.sync({ force: true })
    });

    xit("Should not create the recipe and return status 404 and corresponding text if any of the mandatory properties is not send", () => {
      return agent.post('/recipes')
        .then(res => {
          expect(res.statusCode).to.be(404)
          expect(res.text).to.be.equal('Falta enviar datos obligatorios')
        })
    });

    xit('Should return status 201 and recipe object if the Recipe was succesfully created', () => {
      return agent.post('/recipes')
      .send(recipe)
      .then(res => {
        expect(res.statusCode).to.be(201)
      })
      .then(async() => {
        const [results] = await conn.query('SELECT "DietId" FROM "RecipeDiets" WHERE RecipeId = "hjku44"');
        expect(results[0].RecipeId).to.be('hjku44')
        expect(results.length).to.be(1)
      })
    });

  });

});
