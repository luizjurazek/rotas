const bdName = 'teste';
const bdUser = 'root';
const bdPassword = '88201874luiZZ';

// conectando ao banco de dados com sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize(bdName, bdUser, bdPassword, {
    host: "localhost",
    dialect: 'mysql'
});

// Autenticando conexão
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro);
});


// Criando uma nova tabela 
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});
// Postagem.sync({force: true});
// sempre comentar depois de ser chamado
// para não gerar tabelas iguais

//Inserindo dados no banco
Postagem.create({
    titulo: "Titulo do meu post",
    conteudo: "Lorem ipsum dolar sit amet"
});


// Criando uma nova tabela
// Passamos como 1º argumento o nome da tabela
// e o segundo parametro será um objeto 
// com as colunas que desejamos criar e seus respectivos tipos
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    }, 
    idade: {
        type: Sequelize.INTEGER
    }, 
    email: {
        type: Sequelize.STRING
    }
});
// Usuario.sync({force: true}); sempre comentar depois de ser chamado
// para não gerar tabelas iguais

Usuario.create({
    nome: "Luiz",
    sobrenome: "Jurazek",
    idade: 20,
    email: "luizjurazek@gmail.com"
})