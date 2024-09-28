const Sequelize = require('@sequelize/core');
const connection = require('../database');
const Produto = require('./Produto');
const { DataTypes } = Sequelize;

const Subproduto = connection.define('subproduto',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
       type: DataTypes.STRING,
       allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
     },
     tamanho: {
        type: DataTypes.STRING,
        allowNull: false
     },
     cor: {
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

Produto.hasMany(Subproduto); 
Subproduto.belongsTo(Produto);

module.exports = Subproduto;