const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');




const Sabor = sequelize.define('Sabor', {
  id_sabor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_sabor: {
    type: DataTypes.STRING,
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "sabores",
});


module.exports = { Sabor }
