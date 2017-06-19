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
        let id = requisicao.id
        let query = ("delete from paciente where idpaciente="+id)
        this._connection.run(query,callback)
    }
    consultar(requisicao,callback){
        let id = requisicao.id
        let query = ("select * from paciente where idpaciente="+id)  
        this._connection.run(query,callback)
    }
    atualizar(requisicao, callback){
        this._connection.update("paciente",requisicao,{idpaciente:requisicao.idpaciente},callback)    
    }
}

module.exports = () => {
    return PacienteDAO
}