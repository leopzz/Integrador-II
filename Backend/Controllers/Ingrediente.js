const express = require('express');
const router = express.Router();
const { ObterSequelize } = require('../Servico/Conexao');
const { Ingrediente } = require('../Entidades/Ingrediente');
const { RepositorioIngrediente } = require('../Repositorio/Repositorio');

router.post('/Pesquisa', async function (req, res) {
    const sequelize = ObterSequelize();
    const unitOfWork = await sequelize.transaction();

    const repIngrediente = new RepositorioIngrediente(sequelize, Ingrediente);
    const teste = await repIngrediente.BuscarTodos();

    try {
        unitOfWork.commit();
    } catch (error) {
        unitOfWork.rollback();
    }
    res.json({ retorno: teste });
});

module.exports = router;
