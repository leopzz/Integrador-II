const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const Ingrediente = sequelize.define('Ingrediente', {
  id_ingrediente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_ingrediente: {
    type: DataTypes.INTEGER
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "ingredientes",
});

module.exports = { Ingrediente }