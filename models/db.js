const Sequelize = require('sequelize');

//Configuracao banco de dados
const bdName = 'postapp';
const bdUser = 'root';
const bdPassword = '88201874luiZZ';

// conectando ao banco de dados com sequelize
const sequelize = new Sequelize(bdName, bdUser, bdPassword, {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}