const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const Acompanhamento = sequelize.define('Acompanhamento', {
  id_acom: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_acom: {
    type: DataTypes.STRING
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "acompanhamento",
});

module.exports = { Acompanhamento }