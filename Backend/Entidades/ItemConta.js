const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();


const ItemConta = sequelize.define('ItemConta', {
  id_itconta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_conta: {
    type: DataTypes.INTEGER,
    references: {
      model: Conta,
      key: 'id_conta'
    }
  },
  id_tipo_item: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoItem,
      key: 'id_tp_item'
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
  }
}, {
  tableName: "itconta",
});

module.exports = { ItemConta }