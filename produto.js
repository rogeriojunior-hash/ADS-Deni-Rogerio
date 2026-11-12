
const Sequelize = require('sequelize');
const sequelize = require('./db');

const Produto = sequelize.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descricao: {
        type: Sequelize.STRING
    }
});

module.exports = Produto;