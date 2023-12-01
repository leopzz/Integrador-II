const express = require('express');
const DrinkRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Drink } = require('../Entidades/Drink')
const { RepositorioDrink } = require('../Repositorio/Repositorio')

class DrinkController extends ControllerBase {
    constructor() {
        super(Drink);
    }
}


const IController = new DrinkController();

DrinkRouter.post("/Pesquisar", IController._pesquisar)
DrinkRouter.post("/Salvar", IController._salvar)
DrinkRouter.post("/Deletar", IController._deletar)
DrinkRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
DrinkRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repDrink = new RepositorioDrink();
        const dados = await repDrink.Consultar(req.body.page, req.body.limit);
        const contador = await repDrink.ContarConsulta();

        var columns = {
            ds_drink: "Descrição",
            vl_preco: "Preço" , 
            sn_ativo: "Status"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_drink: item.ds_drink,
                vl_preco: item.vl_preco,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_drink,
                id_drink: item.id_drink,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { DrinkRouter };