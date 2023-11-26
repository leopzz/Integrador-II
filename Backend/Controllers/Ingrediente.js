const express = require('express');
const IngredienteRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Ingrediente } = require('../Entidades/Ingrediente')
const { RepositorioIngrediente } = require('../Repositorio/Repositorio')

class IngredienteController extends ControllerBase {
    constructor() {
        super(Ingrediente);
    }
}


const IController = new IngredienteController();

IngredienteRouter.post("/Pesquisar", IController._pesquisar)
IngredienteRouter.post("/Salvar", IController._salvar)
IngredienteRouter.post("/Deletar", IController._deletar)
IngredienteRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
IngredienteRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repIngrediente = new RepositorioIngrediente();
        const dados = await repIngrediente.Consultar(req.body.page, req.body.limit);
        const contador = await repIngrediente.ContarConsulta();

        var columns = {
            ds_ingrediente: "Descrição",
            sn_ativo: "Status"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_ingrediente: item.ds_ingrediente,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_ingrediente,
                id_ingrediente: item.id_ingrediente,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { IngredienteRouter };
