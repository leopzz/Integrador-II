const express = require('express');
const MassaRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Massa } = require('../Entidades/Massa')
const { RepositorioMassa } = require('../Repositorio/Repositorio')

class MassaController extends ControllerBase {
    constructor() {
        super(Massa);
    }
}


const IController = new MassaController();

MassaRouter.post("/Pesquisar", IController._pesquisar)
MassaRouter.post("/Salvar", IController._salvar)
MassaRouter.post("/Deletar", IController._deletar)
MassaRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
MassaRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repMassa = new RepositorioMassa();
        const dados = await repMassa.Consultar(req.body.page, req.body.limit);
        const contador = await repMassa.ContarConsulta();

        var columns = {
            ds_massa: "Descrição",
            vl_preco: "Preço" , 
            sn_ativo: "Status"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_massa: item.ds_massa,
                vl_preco: item.vl_preco,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_massa,
                id_massa: item.id_massa,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { MassaRouter };