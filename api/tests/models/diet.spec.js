const { Diet, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Diet model', () => {

  before( async () => {
    conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    })
    await Diet.sync({force: true})
  } );

	xit('Should create the Diet', async() => {
		const diet = await Diet.create({
			id: 'algo',
			name: 'Vegetariana'
		});
		expect(diet.toJSON()).toHaveProperty('id','algo');
		expect(diet.toJSON()).toHaveProperty('name', 'Vegetariana');
	})
});