const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');




const StatusConta = sequelize.define('StatusConta', {
  id_status_conta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_status: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "status_conta",
});

module.exports = { StatusConta }
