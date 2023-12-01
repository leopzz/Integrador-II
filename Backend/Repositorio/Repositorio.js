const { RepositorioBase } = require('./RepositorioBase');
const { Ingrediente } = require('../Entidades/Ingrediente');
const { DrinkIngrediente } = require('../Entidades/DrinkIngrediente');
const { Usuario } = require('../Entidades/Usuario');
const { Pedido } = require('../Entidades/Pedido');
const { ItemPedido } = require('../Entidades/ItemPedido');


class RepositorioIngrediente extends RepositorioBase {
    constructor() {
        super(Ingrediente);
    }
    BuscarAtivos() {
        return Ingrediente.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
}

class RepositorioIngrediente_Drinks extends RepositorioBase {
    constructor() {
        super(DrinkIngrediente);
    }
    BuscarAtivos() {
        return DrinkIngrediente.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
}

class RepositorioUsuario extends RepositorioBase {
    constructor() {
        super(Usuario);
    }
}

class RepositorioPedido extends RepositorioBase {
    constructor() {
        super(Pedido);
    }
    BuscarTodes() {
        return this.Pedido.findAll();
    }
}

module.exports = { RepositorioIngrediente , RepositorioIngrediente_Drinks, RepositorioUsuario, RepositorioPedido}
