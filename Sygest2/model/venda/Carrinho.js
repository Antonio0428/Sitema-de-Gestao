const Sequelize = require('@sequelize/core');
const connection = require('../database');
const Cliente = require('../users/Cliente');
const { DataTypes } = Sequelize;

const Carrinho = connection.define('carrinho',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valorTotal: {
        type: DataTypes.FLOAT,
        allowNull:false
    }
});

Cliente.hasMany(Carrinho); 
Carrinho.belongsTo(Cliente);

module.exports = Carrinho;