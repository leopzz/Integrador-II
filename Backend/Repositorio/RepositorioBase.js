const { ObterSequelize } = require('../Servico/Conexao');

class RepositorioBase {
    constructor(sequelize, entidade) {
        this.sequelize = sequelize;
        this.entidade = entidade;
    }
    BuscarTodos() {
        return this.entidade.findAll().then(obj => {return obj;});
    }
    BuscarPorCodigo(codigo) {
        return this.entidade.findByPk(codigo).then(obj => {return obj;});
    }
}   
module.exports = { RepositorioBase }
