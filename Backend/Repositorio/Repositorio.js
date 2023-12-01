const { RepositorioBase } = require('./RepositorioBase');
const { Ingrediente } = require('../Entidades/Ingrediente');
const { DrinkIngrediente } = require('../Entidades/DrinkIngrediente');
const { Pedido } = require('../Entidades/Pedido');
const { ItemPedido } = require('../Entidades/ItemPedido');
const { Usuario } = require('../Entidades/Usuario');
const { Sabor} = require('../Entidades/Sabor')
const { Bebida } = require('../Entidades/Bebida')
const { Acompanhamento } = require('../Entidades/Acompanhamento')
const { Drink } = require('../Entidades/Drink')
const { Entrada } = require('../Entidades/Entrada')
const { Massa } = require('../Entidades/Massa')
const { Prato } = require('../Entidades/Prato');
const { TipoPrato } = require('../Entidades/TipoPrato');
const { Vinho } = require('../Entidades/Vinho');


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

class RepositorioAcompanhamento extends RepositorioBase {
    constructor() {
        super(Acompanhamento);
    }
    BuscarAtivos() {
        return Acompanhamento.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
}

class RepositorioDrink extends RepositorioBase {
    constructor() {
        super(Drink);
    }
    BuscarAtivos() {
        return Drink.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
}

class RepositorioEntrada extends RepositorioBase {
    constructor() {
        super(Entrada);
    }
    BuscarAtivos() {
        return Entrada.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
}

class RepositorioMassa extends RepositorioBase {
    constructor() {
        super(Massa);
    }
    BuscarAtivos() {
        return Massa.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
}

class RepositorioVinho extends RepositorioBase {
    constructor() {
        super(Vinho);
    }
    BuscarAtivos() {
        return Vinho.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
}

class RepositorioPrato extends RepositorioBase {
    constructor() {
        super(Prato);
    }
    BuscarAtivos() {
        return Prato.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
    Consultar(pagina, limite, filtros){ 
        return this.entidade.findAll({offset: ((pagina)*limite), limit: limite, subQuery: false, include:TipoPrato })
    }
}

class RepositorioSabores extends RepositorioBase {
    constructor() {
        super(Sabor);
    }
    BuscarAtivos() {
        return Prato.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
    Consultar(pagina, limite, filtros){ 
        return this.entidade.findAll({offset: ((pagina)*limite), limit: limite, subQuery: false, include:TipoPrato })
    }
}

class RepositorioBebida extends RepositorioBase {
    constructor() {
        super(Bebida);
    }


}

module.exports = { RepositorioIngrediente , RepositorioUsuario, RepositorioPedido, RepositorioIngrediente_Drinks , RepositorioSabores , RepositorioBebida , RepositorioAcompanhamento , RepositorioDrink , RepositorioEntrada , RepositorioMassa ,RepositorioVinho, RepositorioPrato}


