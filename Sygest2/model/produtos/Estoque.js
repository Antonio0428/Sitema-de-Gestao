const Sequelize = require('@sequelize/core');
const connection = require('../database');
const Produto = require('../produtos/Produto');
const { DataTypes } = Sequelize;

const Estoque = connection.define('estoque',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Produto.hasMany(Estoque); 
Estoque.belongsTo(Produto);

module.exports = Estoque;