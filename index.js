const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');
const database = require('./db');
const {
    createProduto,
    consultarProdutos,
    atualizarProduto,
    deletarProduto
} = require('./produto');

const usuario = require('./usuario');

(async () => {
    try {
        await database.sync();
        console.log('Conexão com o banco de dados estabelecida com sucesso. ');

        const rl = readline.createInterface({input, output});

        let executado = true;
        while (executado) {
            const menu = '\nEscolha uma opção:\n' +
                         '1. Criar Produto\n' +
                         '2. consultar produtos\n' +
                         '3. consultar produto por ID\n' +
                         '4. Atualizar Produto\n' +
                         '5. Deletar Produto\n' +
                         '6. Sair\n' +
                         'Opção: ';

                         const opcao = await rl.question(menu);

                         switch (opcao.trim()) {
                            case '1': {
                                const nome = await rl.question('Digite o nome do produto:');

                            }
                         }
        }
    }

(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const produto = await Produto.findByPk(1);

    produto.nome = "Mouse Top";

    const resultadoSave = await produto.save();
    console.log(resultadoSave);
    
    const Usuario = require('./usuario');


    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreateProduto = await Produto.create({
            nome: 'mouse rgbd',
            preco: 15,
            descricao: 'mouse rgbd com fio',
        });
       console.log(resultadoCreateProduto.toJSON());

      produto.destroy({where: {id: 1}});


     const produto = await Produto.findByPk(1);
     produto.destroy();



    } catch (error) {
        console.error(error);
    } 
})();
