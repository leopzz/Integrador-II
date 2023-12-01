const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');
const { ItemPedido } = require('../Entidades/ItemPedido');
const { Tamanho } = require('../Entidades/Tamanho');
const { Borda } = require('../Entidades/Borda');
const { Massa } = require('../Entidades/Massa');



const Pizza = sequelize.define('Pizza', {
  id_pizza: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_itpedido: {
    type: DataTypes.INTEGER,
    references: {
      model: ItemPedido,
      key: 'id_itpedido'
    }
  },
  id_tamanho: {
    type: DataTypes.INTEGER,
    references: {
      model: Tamanho,
      key: 'id_tamanho'
    }
  },
  id_borda: {
    type: DataTypes.INTEGER,
    references: {
      model: Borda,
      key: 'id_borda'
    }
  },
  id_massa: {
    type: DataTypes.INTEGER,
    references: {
      model: Massa,
      key: 'id_massa'
    }
  }
}, {
  tableName: "pizza",
});

module.exports = { Pizza }
