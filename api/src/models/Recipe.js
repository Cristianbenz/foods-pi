const { DataTypes, Op } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'compositeIndex',
      validate: {
        [Op.regexp]: '^([a-zA-z\s,]+)$' 
      }
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        [Op.regexp]: '^(http|https):.*(jpg|jpeg|jpe)$'
      }
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: 'compositeIndex',
      validate: {
        [Op.regexp]: '^([a-zA-z0-9\s,.]+)$'
      }
    },
    healthScore: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
        max: 100
      }
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON)
    }
  },
  {
		timestamps: false
	});
};
