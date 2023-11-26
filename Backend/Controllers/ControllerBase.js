const express = require('express');
const ControllerBaseRouter = express.Router();
const { sequelize } = require('../Servico/Conexao');
const { RepositorioBase } = require('../Repositorio/RepositorioBase');
const { Ingrediente } = require('../Entidades/Ingrediente');

function JsonResult(res, status = true, ObjetoRetorno = null) {
    return res.json({ Status: status, Data: ObjetoRetorno })
}

class ControllerBase {
    constructor(entidade) {
        this.entidade = entidade;
    }
    _pesquisar = async (req, res) => {
        const unitOfWork = await sequelize.transaction();
        console.log(this.entidade)
        const repEntidade = new RepositorioBase(this.entidade);
        const entidades = await repEntidade.BuscarTodos();
        try {
            unitOfWork.commit();
            JsonResult(res, true, entidades);
        } catch (error) {
            console.log(error)
            unitOfWork.rollback();
            JsonResult(res, false, "Ocorreu uma falha ao buscar os dados");
        }
    };
    _buscarPorCodigo = async (req, res) => {
        const unitOfWork = await sequelize.transaction();
        const repEntidade = new RepositorioBase(this.entidade);
        const entidade = await repEntidade.BuscarPorCodigo(req.body[Object.keys(req.body)[0]]);
        try {
            unitOfWork.commit();
            JsonResult(res, true, entidade);
        } catch (error) {
            console.log(error)
            unitOfWork.rollback();
            JsonResult(res, false, "Ocorreu uma falha ao buscar os dados");
        }
    };
    _salvar = async (req, res) => {
        const unitOfWork = await sequelize.transaction();
        const repEntidade = new RepositorioBase(this.entidade);
        try {
            var entidade = null;
            console.log(req.body)
            console.log(Object.keys(req.body)[0])
            console.log(req.body[Object.keys(req.body)[0]])
            if (req.body[Object.keys(req.body)[0]] > 0){
                entidade = await repEntidade.BuscarPorCodigo(req.body[Object.keys(req.body)[0]]);
                if (entidade == null)
                    throw "";
                Object.keys(req.body).forEach((obj) => entidade[obj] = req.body[obj]);
            }
            if (entidade == null){
                delete req.body[Object.keys(req.body)[0]]
                entidade = await this.entidade.build(req.body);
            }

            entidade.save();
            unitOfWork.commit();
            JsonResult(res, true, entidade);
        } catch (error) {
            console.log(error)
            unitOfWork.rollback();
            JsonResult(res, false, "Ocorreu uma falha ao buscar os dados");
        }
    };
    _deletar = async (req, res) => {
        const unitOfWork = await sequelize.transaction();
        const repEntidade = new RepositorioBase(this.entidade);
        try {
            var entidade = await repEntidade.BuscarPorCodigo(req.body[Object.keys(req.body)[0]]);

            if (entidade == null)
                throw "";

            entidade.destroy();

            entidade.save();
            unitOfWork.commit();
            JsonResult(res, true);
        } catch (error) {
            console.log(error)
            unitOfWork.rollback();
            JsonResult(res, false, "Ocorreu uma falha ao buscar os dados");
        }
    };
}


module.exports = { JsonResult };
module.exports = { ControllerBaseRouter };
module.exports = { ControllerBase };
