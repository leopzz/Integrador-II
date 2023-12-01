const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');
const { Prato } = require('../Entidades/Prato');
const { ItemPedido } = require('../Entidades/ItemPedido');



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
