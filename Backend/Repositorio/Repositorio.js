const { RepositorioBase } = require('./RepositorioBase');
const { Ingrediente } = require('../Entidades/Ingrediente');
const { where } = require('sequelize');

class RepositorioIngrediente extends RepositorioBase {
    constructor() {
        super(Ingrediente);
    }
    BuscarAtivos() {
        return Ingrediente.findAll({
            where: {
                sn_ativo: "S"
            }
        }).then(obj => { return obj; });
    }
}

module.exports = { RepositorioIngrediente }