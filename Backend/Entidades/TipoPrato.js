const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');
const { PratoMontado } = require('../Entidades/PratoMontado');



const TipoPrato = sequelize.define('TipoPrato', {
  id_tp_prato: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_tp_prato: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "tp_prato",
});

module.exports = { PratoMontado }