const mysql = require("mysql")
criarConexaoDB = () => {
    return mysql.createConnection({
            host: 'us-cdbr-iron-east-03.cleardb.net',
            user:'b53a445a9da595',
            password:'85ca7130',
            database:'heroku_6a520cb7e6c2117'
    });
} 

module.exports = () => {
    return criarConexaoDB
}