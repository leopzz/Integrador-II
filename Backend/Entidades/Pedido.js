const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');
const { Usuario } = require('../Entidades/Usuario');
const { StatusPedido } = require('../Entidades/StatusPedido');
const { Mesa } = require('../Entidades/Mesa');
const { ItemPedido } = require('./ItemPedido');



const Pedido = sequelize.define('Pedido', {
  id_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  },
  dh_entradapedido: {
    type: DataTypes.DATE
  },
  id_status_pedido: {
    type: DataTypes.INTEGER,
    references: {
      model: StatusPedido,
      key: 'id_status_pedido'
    }
  },
  dh_finalizado: {
    type: DataTypes.DATE
  },
  id_mesa: {
    type: DataTypes.INTEGER,
    references: {
      model: Mesa,
      key: 'id_mesa'
    }
  }
}, {
  tableName: "pedido",
});

Pedido.hasMany(ItemPedido, {as:"ItensPedido", foreignKey: "id_pedido"});

module.exports = { Pedido }