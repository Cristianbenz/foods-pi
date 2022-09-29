const { Recipe, conn } = require("../../src/db.js");
const { expect, should } = require("chai");

describe("Recipe model", function () {
  before(function () {
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  });

  describe("Validators", function () {
    beforeEach(async function () {
      await Recipe.sync({ force: true });
    });

    it("should not create the Recipe if name is not send", async function () {
      try {
        await Recipe.create({
          summary:"para realizar unas tortillas para burritos o tacos es necesario harina, agua, sal, royal y aceite.",
          healthScore: 60,
          steps: [{ value: "paso1" }],
        });
      } catch (error) {
        expect().exist(error.message);
      }
    });

    it("should not create the Recipe if summary is not send", async function(){
      try {
        await Recipe.create({
          name: 'Tortillas para taco',
          healthScore: 60,
          steps: [{ value: "paso1" }],
        });
      } catch (error) {
        expect().exist(error.message)
      }
    });

    it("Should create the recipe if required properties are ok", async function(){
      try {
        const recipe = await Recipe.create({
          name: 'Tortillas para taco',
          summary:"para realizar unas tortillas para burritos o tacos es necesario harina, agua, sal, royal y aceite.",
          healthScore: 60,
          steps: [{ value: "paso1" }],
        });

        expect(recipe).haveOwnProperty('dataValues')
      } catch (error) {
          expect(error).undefined()
      }
        
    });

  });
});
