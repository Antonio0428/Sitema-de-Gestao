const Sequelize = require('@sequelize/core');
const connection = require('../database');
const { DataTypes } = Sequelize;

const Cliente = connection.define('cliente',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
       type: DataTypes.STRING,
       allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
     },
     tel: {
        type: DataTypes.STRING,
        allowNull: false
     }
});

module.exports = Cliente;