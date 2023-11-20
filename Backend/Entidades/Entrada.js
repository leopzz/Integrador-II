const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const Entrada = sequelize.define('Entrada', {
  id_entrada: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_entrada: {
    type: DataTypes.STRING
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "entrada",
});

module.exports = { Entrada }