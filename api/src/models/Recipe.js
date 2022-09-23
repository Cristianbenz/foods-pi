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
      unique: 'combined-index',
      validate: {
        [Op.regexp]: '[a-zA-Z\s,]' 
      }
    },
    image: {
      type: DataTypes.STRING
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: 'combined-index',
      validate: {
        [Op.regexp]: '[a-zA-Z\s,.]'
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
  });
};
