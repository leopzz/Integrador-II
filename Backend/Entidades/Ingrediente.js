const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();


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