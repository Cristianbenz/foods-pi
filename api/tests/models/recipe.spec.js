const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));

    xit('should not create the Recipe if id is not send', async () => {
      expect.assertions(1);
      try {
        await Recipe.create({
          name: 'Pure de papa',
          summary: 'Papa pisada con leche'
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });
  
    xit('should not create the Recipe if name is not send', async () => {
      expect.assertions(1);
      try {
        await Recipe.create({
          id: '12juju',
          summary: 'Carne hecha a las brazas'
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    xit('should not create the Recipe if summary is not send', async () => {
      expect.assertions(1);
      try {
        await Recipe.create({
          id: 'h8ujs9',
          summary: 'Pizza'
        });
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });

    xit('should create the Recipe if all required properties are ok', async () => {
      const recipe = await Ability.create({
        id: 'mghyusd',
        name: '',
        summary: ''
      });
      expect(recipe.toJSON()).toHaveProperty('id','mghyusd');
      expect(recipe.toJSON()).toHaveProperty('name', '');
      expect(recipe.toJSON()).toHaveProperty('summary', '');
    });

  });
});