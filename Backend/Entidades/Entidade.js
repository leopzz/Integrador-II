const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();
const acom_pad = sequelize.define('acom_pad', {
  id_acom_pad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_acom: {
    type: DataTypes.INTEGER
  },
  id_prato: {
    type: DataTypes.INTEGER
  }
}, {

});

const Ingrediente = sequelize.define('Ingrediente', {
  id_ingrediente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_ingrediente: {
    type: DataTypes.INTEGER
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  tableName: "ingredientes",
  schema: 'dba',
});

module.exports = { acom_pad }
module.exports = { Ingrediente }