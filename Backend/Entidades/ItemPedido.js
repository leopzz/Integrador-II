const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();


const ItemPedido = sequelize.define('ItemPedido', {
  id_itpedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_pedido: {
    type: DataTypes.INTEGER,
    references: {
      model: Pedido,
      key: 'id_pedido'
    }
  },
  id_pizza: {
    type: DataTypes.INTEGER,
    references: {
      model: Pizza,
      key: 'id_pizza'
    }
  },
  id_prato_montado: {
    type: DataTypes.INTEGER,
    references: {
      model: PratoMontado,
      key: 'id_prato_montado'
    }
  },
  id_entrada: {
    type: DataTypes.INTEGER,
    references: {
      model: Entrada,
      key: 'id_entrada'
    }
  },
  id_bebida: {
    type: DataTypes.INTEGER,
    references: {
      model: Bebida,
      key: 'id_bebida'
    }
  },
  id_drink: {
    type: DataTypes.INTEGER,
    references: {
      model: Drink,
      key: 'id_drink'
    }
  },
  id_vinho: {
    type: DataTypes.INTEGER,
    references: {
      model: Vinho,
      key: 'id_vinho'
    }
  },
  id_status_itpedido: {
    type: DataTypes.INTEGER,
    references: {
      model: StatusPedido,
      key: 'id_status_pedido'
    }
  },
  dh_final: {
    type: DataTypes.DATE,
  },
  sn_cancelado: {
    type: DataTypes.STRING
  },
  usuario_cancelamento: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  },
  dh_cancelamento: {
    type: DataTypes.DATE
  },
}, {
  tableName: "itpedido",
});

module.exports = { ItemPedido }