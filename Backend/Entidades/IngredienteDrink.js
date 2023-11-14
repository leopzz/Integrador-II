const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();

const IngredienteDrink = sequelize.define('IngredienteDrink', {
  id_ingred_drink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_drink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Drink,
      key: 'id_drink'
    }
  },
  id_drink_ingred: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: DrinkIngrediente,
      key: 'id_drink_ingred'
    }
  }
},{
  tableName: "ingred_drink",
});

module.exports = { IngredienteDrink }