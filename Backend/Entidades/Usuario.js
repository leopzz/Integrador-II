const { Sequelize, DataTypes } = require('sequelize');
const { ObterSequelize } = require('../Servico/Conexao');

const sequelize = ObterSequelize();

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  id_funcao: {
    type: DataTypes.INTEGER,
    references: {
      model: Funcao,
      key: 'id_status'
    }
  }
}, {
  tableName: "usuario",
});


module.exports = { Acompanhamento }
