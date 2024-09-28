const Sequelize = require('@sequelize/core');
const connection = require('../database');
const Subproduto = require('../produtos/Subproduto');
const { DataTypes } = Sequelize;

const ItemCarrinho = connection.define('ItemCarrinho',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Subproduto.hasMany(ItemCarrinho); 
ItemCarrinho.belongsTo(Subproduto);

module.exports = ItemCarrinho;