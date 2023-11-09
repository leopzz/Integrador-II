const { Sequelize } = require('sequelize');

const ObterSequelize = () => {
    require("dotenv").config();
    return new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
        host: process.env.HOST,
        dialect: 'postgres',
        define: {
            timestamps: false,
          },
    }

    ); 
}
module.exports = { ObterSequelize }