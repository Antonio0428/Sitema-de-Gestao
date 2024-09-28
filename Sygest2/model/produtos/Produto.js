const Sequelize = require('@sequelize/core');
const connection = require('../database');
const Categoria = require('./Categoria');
const { DataTypes } = Sequelize;

const Produto = connection.define('produto',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
       type: DataTypes.STRING,
       allowNull: false
    },
    precoMedio: {
        type: DataTypes.FLOAT,
        allowNull: false
     },
     descricao: {
        type: DataTypes.TEXT,
        allowNull: false
     }
});

Categoria.hasMany(Produto); 
Produto.belongsTo(Categoria);

module.exports = Produto;