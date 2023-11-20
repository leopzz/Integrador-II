const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');



const Prato = sequelize.define('Prato', {
  id_prato: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_tp_prato: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoPrato,
      key: 'id_ti_prato'
    }
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  },
  ds_prato: {
    type: DataTypes.STRING
  },
}, {
  tableName: "prato",
});

module.exports = { Prato }