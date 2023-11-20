const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const Drink = sequelize.define('Drink', {
  id_drink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_drink: {
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
  tableName: "drink",
  schema: 'dba',
});

module.exports = { Drink }