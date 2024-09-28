const Sequelize = require('@sequelize/core');
const connection = require('../database');
const { DataTypes } = Sequelize;

const CategoriaServico = connection.define('servico_tab',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
       type: DataTypes.STRING,
       allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
     },
     descricao: {
        type: DataTypes.TEXT,
        allowNull: false
     }
});

module.exports = CategoriaServico;