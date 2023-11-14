const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();

const DrinkIngrediente = sequelize.define('DrinkIngrediente', {
  id_drink_ingred: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_drink_ingred: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "drink_ingred",
});

module.exports = { DrinkIngrediente }