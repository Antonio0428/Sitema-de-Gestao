const Sequelize = require('@sequelize/core');
const connection = require('../database');
const Subproduto = require('../produtos/Subproduto');
const { DataTypes } = Sequelize;

const ItemVenda = connection.define('ItemVenda',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    dataExpiracao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    statu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Subproduto.hasMany(ItemVenda); 
ItemVenda.belongsTo(Subproduto);

ItemVenda.sync({ force: false })
    .then(() => {
        console.log('Tabela de Funcionario sincronizada com sucesso');
    })
    .catch(err => {
        console.error('Erro ao sincronizar Funcionario:', err);
});

module.exports = ItemVenda;