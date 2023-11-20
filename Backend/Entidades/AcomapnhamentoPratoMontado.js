const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');

const AcompanhamentoPratoMontado = sequelize.define('AcompanhamentoPratoMontado', {
  id_acom_prato: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_prato_montado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PratoMontado,
      key: 'id_prato_montado'
    }
  },
  id_acom: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Acompanhamento,
      key: 'id'
    }
  }
},{
  freezeTableName: true,
  tableName: "acom_prato",
  schema: 'dba',
});

module.exports = { AcompanhamentoPratoMontado }