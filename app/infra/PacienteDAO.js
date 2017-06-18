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
        this._connection.run("DELETE FROM paciente where idpaciente=?",requisicao.id,callback)
    }
    consultar(query,callback){
        this._connection.run("select * from paciente where idpaciente=?",query.id,callback)
    }
    atualizar(requisicao, callback){
        this._connection.update("paciente",requisicao,{idpaciente:requisicao.idpaciente},callback)    
    }
}

module.exports = () => {
    return PacienteDAO
}