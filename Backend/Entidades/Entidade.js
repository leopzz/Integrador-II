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

const Acompanhamento = sequelize.define('Acompanhamento', {
  id_acom: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_acom: {
    type: DataTypes.STRING
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "acompanhamento",
});

const Bebida = sequelize.define('Bebida', {
  id_bebida: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_bebida: {
    type: DataTypes.STRING
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "bebida",
});

const Borda = sequelize.define('Borda', {
  id_borda: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_borda: {
    type: DataTypes.STRING
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  tableName: "borda",
  schema: 'dba',
});

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

const Drink = sequelize.define('Drink', {
  id_drink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_drink: {
    type: DataTypes.STRING
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  tableName: "drink",
  schema: 'dba',
});

const DrinkIngrediente = sequelize.define('DrinkIngrediente', {
  id_drink_ingred: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_drink_ingred: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "drink_ingred",
});

const Entrada = sequelize.define('Entrada', {
  id_entrada: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_entrada: {
    type: DataTypes.STRING
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "entrada",
});

const FormaPagamento = sequelize.define('FormaPagamento', {
  id_form_paga: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_form_paga: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "form_paga",
});

const Funcao = sequelize.define('Funcao', {
  id_funcao: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_funcao: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
},{
  tableName: "funcao",
});

const IngredienteDrink = sequelize.define('IngredienteDrink', {
  id_ingred_drink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_drink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Movie,
      key: 'id_drink'
    }
  },
  id_drink_ingred: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: DrinkIngrediente,
      key: 'id_drink_ingred'
    }
  }
},{
  tableName: "ingred_drink",
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
  tableName: "ingredientes",
});

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

const Massa = sequelize.define('Massa', {
  id_massa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_massa: {
    type: DataTypes.INTEGER
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  tableName: "massa",
  schema: 'dba',
});

const Mesa = sequelize.define('Mesa', {
  id_mesa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nr_mesa: {
    type: DataTypes.INTEGER
  },
  dh_criacao: {
    type: DataTypes.DATE
  },
  dh_desativacao: {
    type: DataTypes.DATE
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  tableName: "mesa",
  schema: 'dba',
});

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

const Pizza = sequelize.define('Pizza', {
  id_pizza: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_itpedido: {
    type: DataTypes.INTEGER,
    references: {
      model: ItemPedido,
      key: 'id_itpedido'
    }
  },
  id_tamanho: {
    type: DataTypes.INTEGER,
    references: {
      model: Tamanho,
      key: 'id_tamanho'
    }
  },
  id_borda: {
    type: DataTypes.INTEGER,
    references: {
      model: Borda,
      key: 'id_borda'
    }
  },
  id_massa: {
    type: DataTypes.INTEGER,
    references: {
      model: Massa,
      key: 'id_massa'
    }
  }
}, {
  tableName: "pizza",
});

const PizzaSabor = sequelize.define('PizzaSabor', {
  id_sabor_pizza: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_sabor: {
    type: DataTypes.INTEGER,
    references: {
      model: Sabor,
      key: 'id_sabor'
    }
  },
  id_pizza: {
    type: DataTypes.INTEGER,
    references: {
      model: Pizza,
      key: 'id_pizza'
    }
  }
}, {
  tableName: "pizza_sabor",
});

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
      key: 'id_ti_prato'
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

const PratoMontado = sequelize.define('PratoMontado', {
  id_prato_montado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_prato: {
    type: DataTypes.INTEGER,
    references: {
      model: Prato,
      key: 'id_prato'
    }
  },
  id_itpedido: {
    type: DataTypes.INTEGER,
    references: {
      model: ItemPedido,
      key: 'id_itpedido'
    }
  },
  vl_acom: {
    type: DataTypes.DECIMAL
  }
}, {
  tableName: "prato_montado",
});

const SaborIngrediente = sequelize.define('SaborIngrediente', {
  id_sabor_ingred: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  id_sabor: {
    type: DataTypes.INTEGER,
    references: {
      model: Sabor,
      key: 'id_sabor'
    }
  },
  id_ingrediente: {
    type: DataTypes.INTEGER,
    references: {
      model: Ingrediente,
      key: 'id_ingrediente'
    }
  }
}, {
  tableName: "sabor_ingred",
});

const Sabor = sequelize.define('Sabor', {
  id_sabor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  ds_sabor: {
    type: DataTypes.STRING,
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "sabores",
});

const StatusConta = sequelize.define('StatusConta', {
  id_status_conta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_status: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "status_conta",
});

const StatusItemPedido = sequelize.define('StatusItemPedido', {
  id_status_itpedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_status_itpedido: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "status_itpedido",
});

const StatusPedido = sequelize.define('StatusPedido', {
  id_status_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_status_pedido: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "status_pedido",
});

const Tamanho = sequelize.define('Tamanho', {
  id_tamanho: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  ds_tamanho: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "tamanho",
});

const TipoItem = sequelize.define('TipoItem', {
  id_tp_item: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_tp_item: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "tp_item",
});

const TipoPrato = sequelize.define('TipoPrato', {
  id_tp_prato: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_tp_prato: {
    type: DataTypes.STRING
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "tp_prato",
});

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

const Vinho = sequelize.define('Vinho', {
  id_vinho: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },  
  ds_vinho: {
    type: DataTypes.STRING
  },
  ano_vinho: {
    type: DataTypes.INTEGER
  },
  vl_preco: {
    type: DataTypes.DECIMAL
  },
  sn_ativo: {
    type: DataTypes.STRING
  }
}, {
  tableName: "vinho",
});


module.exports = { Acompanhamento }
module.exports = { AcompanhamentoPrato }
module.exports = { AcompanhamentoPratoMontado }
module.exports = { Bebida }
module.exports = { Borda }
module.exports = { Conta }
module.exports = { Drink }
module.exports = { DrinkIngrediente }
module.exports = { Entrada }
module.exports = { FormaPagamento }
module.exports = { Funcao }
module.exports = { IngredienteDrink }
module.exports = { Ingrediente }
module.exports = { ItemConta }
module.exports = { ItemPedido }
module.exports = { Mesa }
module.exports = { Massa }
module.exports = { Pedido }
module.exports = { Pizza }
module.exports = { PizzaSabor }
module.exports = { Prato }
module.exports = { PratoMontado }
module.exports = { SaborIngrediente }
module.exports = { Sabor }
module.exports = { StatusConta }
module.exports = { StatusItemPedido }
module.exports = { StatusPedido }
module.exports = { Tamanho }
module.exports = { TipoItem }
module.exports = { TipoPrato }
module.exports = { Usuario }
module.exports = { Vinho }