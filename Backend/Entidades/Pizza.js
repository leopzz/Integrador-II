const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();

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
