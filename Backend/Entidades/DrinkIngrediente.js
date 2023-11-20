const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

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