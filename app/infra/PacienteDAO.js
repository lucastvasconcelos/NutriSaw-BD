class PacienteDAO {
    constructor(_connection){
        this._connection = _connection
    }
    
    lista(callback){
        this._connection.run('select * from paciente',callback)
    }

    adicionar(requisicao,callback){
        this._connection.insert("paciente",requisicao,callback)
    }
    excluir(requisicao,callback){
        console.log(requisicao)
        this._connection.run("DELETE FROM paciente where idpaciente=?",requisicao.id,callback)
    }
}

module.exports = () => {
    return PacienteDAO
}