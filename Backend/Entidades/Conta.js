const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const Conta = sequelize.define('Conta', {
  id_conta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nm_cliente: {
    type: DataTypes.STRING
  },
  id_mesa: {
    type: DataTypes.INTEGER,
    references: {
      model: Mesa,
      key: 'id_mesa'
    }
  },
  valor_total: {
    type: DataTypes.DECIMAL
  },
  id_forma_paga: {
    type: DataTypes.INTEGER
  },
  id_status_conta: {
    type: DataTypes.INTEGER
  },
  id_nota: {
    type: DataTypes.INTEGER
  },
  dh_inicio: {
    type: DataTypes.DATE
  },
  dh_final: {
    type: DataTypes.DATE
  }
},{
  tableName: "conta",
});

module.exports = { Conta }