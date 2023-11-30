const express = require('express');
const PratoRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Prato } = require('../Entidades/Prato')
const { RepositorioPrato } = require('../Repositorio/Repositorio')

class PratoController extends ControllerBase {
    constructor() {
        super(Prato);
    }
}


const IController = new PratoController();

PratoRouter.post("/Pesquisar", IController._pesquisar)
PratoRouter.post("/Salvar", IController._salvar)
PratoRouter.post("/Deletar", IController._deletar)
PratoRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
PratoRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repPrato = new RepositorioPrato();
        const dados = await repPrato.Consultar(req.body.page, req.body.limit);
        const contador = await repPrato.ContarConsulta();

        var columns = {
            ds_prato: "Descrição",
            vl_preco: "Preço" , 
            sn_ativo: "Status" ,
            id_tp_prato: "Tipo Prato"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_prato: item.ds_prato,
                vl_preco: item.vl_preco,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id_tp_prato: item.Prato !=null? item.Prato.ds_tp_prato:'',
                id: item.id_prato,
                id_prato: item.id_prato,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { PratoRouter };