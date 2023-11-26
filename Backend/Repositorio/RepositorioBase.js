const { sequelize } = require('../Servico/Conexao');

class RepositorioBase {
    constructor(entidade) {
        this.entidade = entidade;
    }
    BuscarTodos() {
        return this.entidade.findAll().then(obj => {return obj;});
    }
    BuscarPorCodigo(codigo) {
        return this.entidade.findByPk(codigo).then(obj => {return obj;});
    }
    Salvar(obj) {
        this.entidade.save({fields: obj})
        return;
    }
    ContarConsulta(){
        return this.entidade.count()
    }
    Consultar(pagina, limite, filtros){ 
        return this.entidade.findAll({offset: ((pagina)*limite), limit: limite, subQuery: false })
    }
}   
module.exports = { RepositorioBase }
