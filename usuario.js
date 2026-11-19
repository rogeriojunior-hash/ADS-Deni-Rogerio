
const Sequelize = require('sequelize');
const sequelize = require('./db');
const Produto = require('./produto');

const Usuario = sequelize.define('Usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

/*metodos*/
async function createUsuario(nome, preco, descricao) {
    try {
        const novousuario = await Produto.create({
            nome: nome,
            preco: preco,
            descricao: descricao
        });
        console.log('Novo usuario criado:', novoProduto.toJSON());
    } catch (error) {
        console.error('Erro ao criar Usuario:', error);
    }
}
async function consultarusuario() {
    try {
        const produtos = await Usuario.findAll();
        console.log('Usuarios encontrados', usuarios.map(produto => produto.toJSON()));
    } catch (error) {
        console.error('Erro ao consultar usuarios', error);

    } 
}

async function consultarCodUsuario(id) {
    try {
        const usuarios = await Usuario.findByPk(id);
        console.log('Usuario encontrado:', usuarios.toJSON());
    } catch (error) {
        console.error('Erro ao consultar usuarios:',error);

    }
}


module.exports = {Usuario,
    createProduto,
    ConsultarProdutos,
    consultarCodProdutos,
    atualizarProduto,
    deletarProduto
};
