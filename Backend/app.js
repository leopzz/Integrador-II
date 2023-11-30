const { Sequelize } = require('sequelize');
const {IngredienteRouter} = require('./Controllers/Ingrediente') 
const {Ingrediente_DrinksRouter} = require('./Controllers/Ingrediente_Drinks') 
const {SaboresRouter} = require('./Controllers/Sabores') 
const {BebidaRouter} = require('./Controllers/Bebida') 
const {AcompanhamentoRouter} = require('./Controllers/Acompanhamento') 
const {DrinkRouter} = require('./Controllers/Drink') 
const {EntradaRouter} = require('./Controllers/Entrada') 
const {MassaRouter} = require('./Controllers/Massa') 
const {PratoRouter} = require('./Controllers/Prato') 
const {VinhoRouter} = require('./Controllers/Vinho') 
const cors = require('cors');
var bodyParser = require('body-parser')

require("dotenv").config();
const port = process.env.PORTA;

const express = require('express');
const app = express();
app.use(cors())
app.use(express.json())
app.use('/Ingredientes', IngredienteRouter);
app.use('/Ingrediente_Drinks', Ingrediente_DrinksRouter);
app.use('/Sabores', SaboresRouter);
app.use('/Bebidas', BebidaRouter);
app.use('/Acompanhamentos', AcompanhamentoRouter);
app.use('/Drinks', DrinkRouter);
app.use('/Entradas', EntradaRouter);
app.use('/Massas', MassaRouter);
app.use('/Pratos', PratoRouter);
app.use('/Vinhos', VinhoRouter);

app.listen(port);

async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    });
    const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
        host: '',
        dialect: 'postgres'
    });

    const client = await pool.connect();
    client.release();
    console.log("Servidor iniciado")
    global.connection = pool;
    return pool.connect();
}


connect(); 
