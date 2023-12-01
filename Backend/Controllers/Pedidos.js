const express = require('express');
const PedidoRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Pedido } = require('../Entidades/Pedido')
const { ItemPedido } = require('../Entidades/ItemPedido')
const { RepositorioPedido } = require('../Repositorio/Repositorio')

class PedidoController extends ControllerBase {
    constructor() {
        super(Pedido);
    }
}


const IController = new PedidoController();

PedidoRouter.post("/Pesquisar", IController._pesquisar)
PedidoRouter.post("/Salvar", IController._salvar)
PedidoRouter.post("/Deletar", IController._deletar)
PedidoRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
PedidoRouter.post("/GerarPedido", async function (req, res) {
    try {
        var pedido = new Pedido();
        pedido.id_status_pedido = 1;
        pedido.id_usuario = req.body.usuario;
        pedido.dh_entradapedido = new Date();
        pedido.id_mesa = req.body.mesa;
        await pedido.save();
        await pedido.update();
        console.log(pedido)
        for (var i = 0; i < req.body.pedido.length; i++) {
            var item = req.body.pedido[i];
            for (var i = 0; i < item.quantidade; i++) {
                var itpedido = new ItemPedido();
                itpedido.ds_descricao = item.item;
                itpedido.id_pedido = pedido.id_pedido;
                itpedido.id_status_itpedido = 2;
                itpedido.save();
            }
        }
        res.json({ Status: true, Data: "Pedido criado com sucesso" })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

PedidoRouter.post("/ObterPedidos", async function (req, res) {
    try {
        var repPedido = new RepositorioPedido();
        var pedidos = await Pedido.findAll({ include: "ItensPedido" });

        res.json({ Status: true, Data: pedidos })
    }
    catch (error) {
        console.log(error)
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" })
    }
})

module.exports = { PedidoRouter };