const Sequelize = require('@sequelize/core');
const connection = require('../database');
const { DataTypes } = Sequelize;

const Funcao = connection.define('funcao',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
       type: DataTypes.STRING,
       allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
     }
});

module.exports = Funcao;