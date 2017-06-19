const mysql = require("mysql")
criarConexaoDB = () => {
    if (!process.env.NODE_ENV){
        return mysql.createConnection({
            host:"localhost",
            user:'root',
            password:'',
            database:'nutrisaw'
        })
    }
    if(process.env.NODE_ENV == 'production') {
    return mysql.createConnection({
            host: 'us-cdbr-iron-east-03.cleardb.net',
            user:'b53a445a9da595',
            password:'85ca7130',
            database:'heroku_6a520cb7e6c2117'
    });
} 
}

module.exports = () => {
    return criarConexaoDB
}