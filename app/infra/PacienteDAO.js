class PacienteDAO {
    constructor(_connection){
        this._connection = _connection
    }
    
    lista(callback){
        this._connection.query('select * from paciente',callback)
    }

    adicionar(requisicao,callback){
        this._connection.query("insert into paciente set ?",requisicao,callback)
    }
    excluir(requisicao,callback){
        let id = requisicao.id
        let query = ("delete from paciente where idpaciente="+id)
        this._connection.query(query,callback)
    }
    consultar(requisicao,callback){
        let id = requisicao.id
        let query = ("select * from paciente where idpaciente="+id)  
        this._connection.query(query,callback)
    }
    atualizar(requisicao, callback){
        let alteracao = "update paciente set ? where idpaciente="+requisicao.idpaciente
        console.log(alteracao)
        this._connection.query(alteracao,requisicao,callback)    
    }
}

module.exports = () => {
    return PacienteDAO
}