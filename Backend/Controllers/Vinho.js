const express = require('express');
const VinhoRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Vinho } = require('../Entidades/Vinho')
const { RepositorioVinho } = require('../Repositorio/Repositorio')

class VinhoController extends ControllerBase {
    constructor() {
        super(Vinho);
    }
}


const IController = new VinhoController();

VinhoRouter.post("/Pesquisar", IController._pesquisar)
VinhoRouter.post("/Salvar", IController._salvar)
VinhoRouter.post("/Deletar", IController._deletar)
VinhoRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
VinhoRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repVinho = new RepositorioVinho();
        const dados = await repVinho.Consultar(req.body.page, req.body.limit);
        const contador = await repVinho.ContarConsulta();

        var columns = {
            ds_vinho: "Descrição",
            vl_preco: "Preço" , 
            ano_vinho: "Ano" ,
            sn_ativo: "Status"

        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_vinho: item.ds_vinho,
                vl_preco: item.vl_preco,
                ano_vinho: item.ano_vinho,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_vinho,
                id_vinho: item.id_vinho,

            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { VinhoRouter };