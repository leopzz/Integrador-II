const { RepositorioBase } = require('./RepositorioBase');
const { Ingrediente } = require('../Entidades/Ingrediente');
const { DrinkIngrediente } = require('../Entidades/DrinkIngrediente');
const { Sabor} = require('../Entidades/Sabor')
const { Bebida } = require('../Entidades/Bebida')
const { Acompanhamento } = require('../Entidades/Acompanhamento')
const { Drink } = require('../Entidades/Drink')
const { Entrada } = require('../Entidades/Entrada')
const { Massa } = require('../Entidades/Massa')


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

class RepositorioSabores extends RepositorioBase {
    constructor() {
        super(Sabor);
    }
    BuscarAtivos() {
        return Sabor.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
    }
}

class RepositorioBebida extends RepositorioBase {
    constructor() {
        super(Bebida);
    }
    BuscarAtivos() {
        return Bebida.findAll({
            where: {
                sn_ativo: "S"
            },
            
        }).then(obj => { return obj; });
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

module.exports = { RepositorioIngrediente , RepositorioIngrediente_Drinks , RepositorioSabores , RepositorioBebida , RepositorioAcompanhamento , RepositorioDrink , RepositorioEntrada , RepositorioMassa}


