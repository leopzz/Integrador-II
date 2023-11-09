const { Sequelize } = require('sequelize');

require("dotenv").config();
const port = process.env.PORTA;

const express = require('express');
const app = express();
app.use(express.json());

app.use('/Cadastros', require('./Controllers/Cadastros'));

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
