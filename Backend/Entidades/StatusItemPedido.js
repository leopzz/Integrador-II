const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();


const StatusItemPedido = sequelize.define('StatusItemPedido', {
  id_status_itpedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_status_itpedido: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "status_itpedido",
});

module.exports = { StatusItemPedido }
