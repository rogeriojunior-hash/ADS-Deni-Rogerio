

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

    } catch (error) {
        console.error(error);
    } 
})();