const express = require('express');
const SaboresRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Sabor } = require('../Entidades/Sabor')
const { RepositorioSabores } = require('../Repositorio/Repositorio')

class SaboresController extends ControllerBase {
    constructor() {
        super(Sabor);
    }
}


const IController = new SaboresController();

SaboresRouter.post("/Pesquisar", IController._pesquisar)
SaboresRouter.post("/Salvar", IController._salvar)
SaboresRouter.post("/Deletar", IController._deletar)
SaboresRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
SaboresRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repSabores = new RepositorioSabores();
        const dados = await repSabores.Consultar(req.body.page, req.body.limit);
        const contador = await repSabores.ContarConsulta();

        var columns = {
            ds_sabor: "Descrição",
            sn_ativo: "Status"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_sabor: item.ds_sabor,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_sabor,
                id_sabor: item.id_sabor,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { SaboresRouter };