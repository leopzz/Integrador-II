const express = require('express');
const router = express.Router();
const { sequelize } = require('../Servico/Conexao');

function JsonResult(res, status = true, ObjetoRetorno = null){
    return res.json({Status: status, Data: ObjetoRetorno})
}

module.exports = {JsonResult};
