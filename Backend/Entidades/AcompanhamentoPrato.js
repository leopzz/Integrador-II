const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();

const AcompanhamentoPrato = sequelize.define('AcompanhamentoPrato', {
  id_acom_pad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_acom: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Acompanhamento,
      key: 'id_acom'
    }
  },
  id_prato: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Prato,
      key: 'id_prato'
    }
  }
},{
  freezeTableName: true,
  tableName: "acom_pad",
  schema: 'dba',
});

module.exports = { AcompanhamentoPrato }