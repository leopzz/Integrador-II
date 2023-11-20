const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');




const Massa = sequelize.define('Massa', {
  id_massa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_massa: {
    type: DataTypes.INTEGER
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  tableName: "massa",
  schema: 'dba',
});

module.exports = { Massa }