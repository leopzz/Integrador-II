const express = require('express');
const Ingrediente_DrinksRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { IngredienteDrink } = require('../Entidades/IngredienteDrink')
const { RepositorioIngrediente_Drinks } = require('../Repositorio/Repositorio')

class Ingrediente_DrinksController extends ControllerBase {
    constructor() {
        super(IngredienteDrink);
    }
}


const IController = new Ingrediente_DrinksController();

Ingrediente_DrinksRouter.post("/Pesquisar", IController._pesquisar)
Ingrediente_DrinksRouter.post("/Salvar", IController._salvar)
Ingrediente_DrinksRouter.post("/Deletar", IController._deletar)
Ingrediente_DrinksRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
Ingrediente_DrinksRouter.post("/ObterGridPesquisa", async function (req, res) {
    try {
        const repIngrediente_Drinks = new RepositorioIngrediente_Drinks();
        const dados = await repIngrediente_Drinks.Consultar(req.body.page, req.body.limit);
        const contador = await repIngrediente_Drinks.ContarConsulta();

        var columns = {
            ds_drink_ingred: "Descrição",
            sn_ativo: "Status"
        }

        var grid = { rows: [], columns: columns, count: contador };
        for (var i = 0; i < dados.length; i++) {
            var item = dados[i];
            grid.rows.push({
                ds_drink_ingred: item.ds_drink_ingred,
                sn_ativo: item.sn_ativo == "S" ? "Ativo" : "Inativo",
                id: item.id_drink_ingred,
                id_drink_ingred: item.id_drink_ingred,
            });
        }

        res.json({ Status: true, Data: grid })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { Ingrediente_DrinksRouter };
