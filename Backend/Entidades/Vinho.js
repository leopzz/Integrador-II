const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');



const Vinho = sequelize.define('Vinho', {
  id_vinho: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_vinho: {
    type: DataTypes.STRING
  },
  ano_vinho: {
    type: DataTypes.INTEGER
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "vinho",
});

module.exports = { Vinho }
