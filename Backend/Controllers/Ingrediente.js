const express = require('express');
const router = express.Router();
const { sequelize } = require('../Servico/Conexao');
const { RepositorioIngrediente } = require('../Repositorio/Repositorio');
const { JsonResult } = require('./ControllerBase');
const { Ingrediente } = require('../Entidades/Ingrediente')

router.post('/Pesquisa', async function (req, res) {
    const unitOfWork = await sequelize.transaction();
    const repIngrediente = new RepositorioIngrediente();
    const ingredientes = await repIngrediente.BuscarAtivos();
    try {
        unitOfWork.commit();
        JsonResult(res, true, ingredientes);
    } catch (error) {
        console.log(error)
        unitOfWork.rollback();
        JsonResult(res, false, "Ocorreu uma falha ao buscar os dados");
    }
});

router.post('/BuscarPorCodigo', async function (req, res) {
    const unitOfWork = await sequelize.transaction();
    const repIngrediente = new RepositorioIngrediente();
    const ingrediente = await repIngrediente.BuscarPorCodigo(req.body.id_ingrediente);
    try {
        unitOfWork.commit();
        JsonResult(res, true, ingredientes);
    } catch (error) {
        console.log(error)
        unitOfWork.rollback();
        JsonResult(res, false, "Ocorreu uma falha ao buscar os dados");
    }
});

router.post('/Salvar', async function (req, res) {
    const unitOfWork = await sequelize.transaction();
    const repIngrediente = new RepositorioIngrediente();
    try {
        var ingrediente = await repIngrediente.BuscarPorCodigo(req.body.id_ingrediente);

        if (ingrediente == null)
            ingrediente = await Ingrediente.build({});

        console.log(ingrediente)
        Object.keys(req.body).forEach((obj) => ingrediente[obj] = req.body[obj]);
        ingrediente.save();
        unitOfWork.commit();
        JsonResult(res, true, ingrediente);
    } catch (error) {
        console.log(error)
        unitOfWork.rollback();
        JsonResult(res, false, "Ocorreu uma falha ao buscar os dados");
    }
});

router.post('/Deletar', async function (req, res) {
    const unitOfWork = await sequelize.transaction();
    const repIngrediente = new RepositorioIngrediente();
    try {
        var ingrediente = await repIngrediente.BuscarPorCodigo(req.body.id_ingrediente);

        if (ingrediente == null)
            throw "";

        ingrediente.destroy();
        
        ingrediente.save();
        unitOfWork.commit();
        JsonResult(res, true);
    } catch (error) {
        console.log(error)
        unitOfWork.rollback();
        JsonResult(res, false, "Ocorreu uma falha ao buscar os dados");
    }
});

module.exports = router;
