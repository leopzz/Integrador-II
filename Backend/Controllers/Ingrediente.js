const express = require('express');
const router = express.Router();
const { ObterSequelize } = require('../Servico/Conexao');
const { acom_pad, Ingrediente } = require('../Entidades/Entidade');
const { RepositorioIngrediente } = require('../Repositorio/Repositorio');

router.post('/Ingrediente/Pesquisa', async function (req, res) {
    const sequelize = ObterSequelize();
    const unitOfWork = await sequelize.transaction();

    const repIngrediente = new RepositorioIngrediente(sequelize, Ingrediente);
    const teste = await repIngrediente.BuscarTodos();

    try {
        unitOfWork.commit();
    } catch (error) {
        unitOfWork.rollback();
    }
    res.json({});
});

module.exports = router;
