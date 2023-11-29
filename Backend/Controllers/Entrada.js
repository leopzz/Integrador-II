const express = require('express');
const EntradaRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Entrada } = require('../Entidades/Entrada')
const { RepositorioEntrada } = require('../Repositorio/Repositorio')

class EntradaController extends ControllerBase {
    constructor() {
        super(Entrada);
    }
}


const IController = new EntradaController();

EntradaRouter.post("/Pesquisar", IController._pesquisar)
EntradaRouter.post("/Salvar", IController._salvar)
EntradaRouter.post("/Deletar", IController._deletar)
EntradaRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
EntradaRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repEntrada = new RepositorioEntrada();
        const dados = await repEntrada.Consultar(req.body.page, req.body.limit);
        const contador = await repEntrada.ContarConsulta();

        var columns = {
            ds_entrada: "Descrição",
            vl_preco: "Preço" , 
            sn_ativo: "Status"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_entrada: item.ds_entrada,
                vl_preco: item.vl_preco,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_entrada,
                id_entrada: item.id_entrada,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { EntradaRouter };