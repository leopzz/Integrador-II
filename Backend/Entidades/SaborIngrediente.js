const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');




const SaborIngrediente = sequelize.define('SaborIngrediente', {
  id_sabor_ingred: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_sabor: {
    type: DataTypes.INTEGER,
    references: {
      model: Sabor,
      key: 'id_sabor'
    }
  },
  id_ingrediente: {
    type: DataTypes.INTEGER,
    references: {
      model: Ingrediente,
      key: 'id_ingrediente'
    }
  }
}, {
  tableName: "sabor_ingred",
});

module.exports = { SaborIngrediente }
