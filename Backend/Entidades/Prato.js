const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../Servico/Conexao');
const { TipoPrato } = require('../Entidades/TipoPrato')


const Prato = sequelize.define('Prato', {
  id_prato: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_tp_prato: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoPrato,
      key: 'id_tp_prato'
    }
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  },
  ds_prato: {
    type: DataTypes.STRING
  },
}, {
  tableName: "prato",
});
Prato.hasOne(TipoPrato ,{foreignKey: { name:'id_tp_prato' , allowNull:true}  })
TipoPrato.belongsTo(TipoPrato , {foreignKey:'id_tp_prato'})
module.exports = { Prato }