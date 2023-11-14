const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();

const PizzaSabor = sequelize.define('PizzaSabor', {
  id_sabor_pizza: {
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
  id_pizza: {
    type: DataTypes.INTEGER,
    references: {
      model: Pizza,
      key: 'id_pizza'
    }
  }
}, {
  tableName: "pizza_sabor",
});

module.exports = { PizzaSabor }