const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();


const Tamanho = sequelize.define('Tamanho', {
  id_tamanho: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  ds_tamanho: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "tamanho",
});

module.exports = { Tamanho }
