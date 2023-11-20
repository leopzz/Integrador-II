const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const FormaPagamento = sequelize.define('FormaPagamento', {
  id_form_paga: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_form_paga: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "form_paga",
});

module.exports = { FormaPagamento }