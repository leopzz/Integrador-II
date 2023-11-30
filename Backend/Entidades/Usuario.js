const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');
const { Funcao } = require('../Entidades/Funcao');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.STRING,
    allowNull: true,
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


module.exports = { Usuario }
