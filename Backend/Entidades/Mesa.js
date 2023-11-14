const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();

const Mesa = sequelize.define('Mesa', {
  id_mesa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nr_mesa: {
    type: DataTypes.INTEGER
  },
  dh_criacao: {
    type: DataTypes.DATE
  },
  dh_desativacao: {
    type: DataTypes.DATE
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  tableName: "mesa",
  schema: 'dba',
});

module.exports = { Mesa }