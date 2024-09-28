const Sequelize = require('@sequelize/core');
const connection = require('../database');
const Funcao = require('./Funcao');
const { DataTypes } = Sequelize;

const Funcionario = connection.define('funcionario',{
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
     },
     senha: {
        type: DataTypes.STRING,
        allowNull: false
     }
});

Funcao.hasMany(Funcionario); 
Funcionario.belongsTo(Funcao);

module.exports = Funcionario;