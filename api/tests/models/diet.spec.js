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

	it('Should create the Diet', async() => {
		const diet = await Diet.create({
			name: 'Vegetariana'
		});
		expect(diet.toJSON()).to.haveOwnProperty('id');
		expect(diet.toJSON()).to.haveOwnProperty('name', 'Vegetariana');
	})
});