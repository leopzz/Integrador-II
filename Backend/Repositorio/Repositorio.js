const { RepositorioBase } = require('./RepositorioBase');

class RepositorioIngrediente extends RepositorioBase {
    constructor(Ingrediente) {
        super(Ingrediente);
    }
}   

module.exports = { RepositorioIngrediente }