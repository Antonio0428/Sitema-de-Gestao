const Sequelize = require('@sequelize/core');
const connection = require('../database');
const { DataTypes } = Sequelize;

const Categoria = connection.define('categoria',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
       type: DataTypes.STRING,
       allowNull: false
    }
});

module.exports = Categoria;