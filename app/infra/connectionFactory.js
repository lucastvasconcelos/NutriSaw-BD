const sqlite = require("sqlite-sync")
criarConexaoDB = () => {
    return  sqlite.connect('nutrisaw.db')
}

module.exports = () => {
    return criarConexaoDB
}