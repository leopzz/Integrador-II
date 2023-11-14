const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();

const PratoMontado = sequelize.define('PratoMontado', {
  id_prato_montado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_prato: {
    type: DataTypes.INTEGER,
    references: {
      model: Prato,
      key: 'id_prato'
    }
  },
  id_itpedido: {
    type: DataTypes.INTEGER,
    references: {
      model: ItemPedido,
      key: 'id_itpedido'
    }
  },
  vl_acom: {
    type: DataTypes.DECIMAL
  }
}, {
  tableName: "prato_montado",
});

module.exports = { PratoMontado }
