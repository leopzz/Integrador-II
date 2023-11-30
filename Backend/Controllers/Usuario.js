const express = require('express');
const UsuarioRouter = express.Router();
const { JsonResult, ControllerBase } = require('./ControllerBase');
const { Usuario } = require('../Entidades/Usuario')
const { RepositorioUsuario } = require('../Repositorio/Repositorio')

class UsuarioController extends ControllerBase {
    constructor() {
        super(Usuario);
    }
}


const IController = new UsuarioController();

UsuarioRouter.post("/Pesquisar", IController._pesquisar)
UsuarioRouter.post("/Salvar", IController._salvar)
UsuarioRouter.post("/Deletar", IController._deletar)
UsuarioRouter.post("/BuscarPorCodigo", IController._buscarPorCodigo)
UsuarioRouter.post("/Login", async function (req, res) {
    try {
        const repUsuario = new RepositorioUsuario();
        var usuario = await repUsuario.BuscarPorCodigo(req.body.Codigo)

        if (usuario == null){
            res.json({ Status: false, Data: "Usuário não foi encontrado" });
        }
        else {
            res.json({ Status: true, Data: "Logado com sucesso" });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ Status: false, Data: "Ocorreu uma falha ao buscar os dados" });
    }
})

module.exports = { UsuarioRouter };
