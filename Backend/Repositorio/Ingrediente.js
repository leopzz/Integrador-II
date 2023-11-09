const { RepositorioBase } = require('../Repositorio/RepositorioBase');

class RepositorioIngrediente extends RepositorioBase {
    constructor(sequelize, Ingrediente) {
        super(sequelize, Ingrediente);
    }
}   

module.exports = { RepositorioIngrediente }