const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const Borda = sequelize.define('Borda', {
  id_borda: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_borda: {
    type: DataTypes.STRING
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  tableName: "borda",
  schema: 'dba',
});

module.exports = { Borda }