const express = require('express');
const AcompanhamentoRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Acompanhamento } = require('../Entidades/Acompanhamento')
const { RepositorioAcompanhamento } = require('../Repositorio/Repositorio')

class AcompanhamentoController extends ControllerBase {
    constructor() {
        super(Acompanhamento);
    }
}


const IController = new AcompanhamentoController();

AcompanhamentoRouter.post("/Pesquisar", IController._pesquisar)
AcompanhamentoRouter.post("/Salvar", IController._salvar)
AcompanhamentoRouter.post("/Deletar", IController._deletar)
AcompanhamentoRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
AcompanhamentoRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repAcompanhamento = new RepositorioAcompanhamento();
        const dados = await repAcompanhamento.Consultar(req.body.page, req.body.limit);
        const contador = await repAcompanhamento.ContarConsulta();

        var columns = {
            ds_acom: "Descrição",
            vl_preco: "Preço" , 
            sn_ativo: "Status"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_acom: item.ds_acom,
                vl_preco: item.vl_preco,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_acom,
                id_acom: item.id_acom,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { AcompanhamentoRouter };