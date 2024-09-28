const Sequelize = require('@sequelize/core');
const connection = require('../database');
const Cliente = require('../users/Cliente');
const { DataTypes } = Sequelize;

const Venda = connection.define('venda',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    formaPagamento: {
        type: DataTypes.STRING,
        allowNull:false
    },
    valorTotal: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    desconto: {
        type: DataTypes.FLOAT,
        allowNull:false
    }
});

Cliente.hasMany(Venda); 
Venda.belongsTo(Cliente);

module.exports = Venda;