const express = require('express');
const BebidaRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Bebida } = require('../Entidades/Bebida')
const { RepositorioBebida } = require('../Repositorio/Repositorio')

class BebidaController extends ControllerBase {
    constructor() {
        super(Bebida);
    }
}


const IController = new BebidaController();

BebidaRouter.post("/Pesquisar", IController._pesquisar)
BebidaRouter.post("/Salvar", IController._salvar)
BebidaRouter.post("/Deletar", IController._deletar)
BebidaRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
BebidaRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repBebida = new RepositorioBebida();
        const dados = await repBebida.Consultar(req.body.page, req.body.limit);
        const contador = await repBebida.ContarConsulta();

        var columns = {
            ds_bebida: "Descrição",
            vl_preco: "Preço" , 
            sn_ativo: "Status"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_bebida: item.ds_bebida,
                vl_preco: item.vl_preco,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_bebida,
                id_bebida: item.id_bebida,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { BebidaRouter };