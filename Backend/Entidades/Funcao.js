const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const Funcao = sequelize.define('Funcao', {
  id_funcao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_funcao: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "funcao",
});
module.exports = { Funcao }