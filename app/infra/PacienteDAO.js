class PacienteDAO {
    constructor(_connection){
        this._connection = _connection
    }
    
    lista(callback){
        this._connection.query('select * from paciente',callback)
    }

    adicionar(requisicao,callback){
        console.log(requisicao)
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
        this._connection.query(alteracao,requisicao,callback)    
    }
    buscarPorNome(requisicao,callback){
        let teste = requisicao.nome
        let query = "select * from paciente where nome='"+teste+"'"
        this._connection.query(query,callback)
    }
    buscarPorIdade(requisicao,callback){
        let teste = requisicao.idade
        let query = "select * from paciente where idade="+teste
        this._connection.query(query,callback)
    }

    buscarPorImc(app,requisicao,callback){
        let imc = requisicao.imc
        let query = "select * from paciente where "+app.helpers.imc(imc)
        console.log(query)
        this._connection.query(query,callback)
    
    }
    buscarPorSexo(requisicao,callback){
        let teste = requisicao.sexo
        let query = "select * from paciente where sexo='"+teste+"'"
        this._connection.query(query,callback)
    }
    buscarPorNomeEIdade(requisicao,callback){
        let nome = requisicao.nome
        let idade = requisicao.idade
        let query = "select * from paciente where nome='"+nome+"'and idade="+idade
        this._connection.query(query,callback)
    }
    buscarPorNomeEImc(app,requisicao,callback){
        let nome = requisicao.nome
        let imc = app.helpers.imc(requisicao.imc)
        let query = "select * from paciente where "+imc+"and nome='"+nome+"'"
        this._connection.query(query,callback)
        
    }
    buscarPorNomeESexo(requisicao,callback){
        let nome = requisicao.nome
        let sexo = requisicao.sexo
        let query = "select * from paciente where nome='"+nome+"'and sexo='"+sexo+"'"
        this._connection.query(query,callback)
    }
    buscarPorIdadeEImc(requisicao,callback){
        let query = "select * from paciente where imc="+app.helpers.imc(requisicao.imc) +"  and idade='"+requisicao.idade+"'"
        this._connection.query(query,callback)
                
    }
    buscarPorIdadeESexo(requisicao,callback){
        let idade = requisicao.idade
        let sexo = requisicao.sexo
        let query = "select * from paciente where idade='"+idade+"'and sexo='"+sexo+"'"
        this._connection.query(query,callback)
    }
    buscarPorImcESexo(requisicao,callback){
        let query = "select * from paciente where imc="+app.helpers.imc(requisicao.imc)+"and sexo='"+sexo+"'"
        this._connection.query(query,callback)       
    }

    buscarPorNomeIdadeIMC(app,requisicao,callback){
            let query = "select * from paciente where imc ="+app.helpers.imc(requisicao.imc)+"and nome='"+requisicao.nome+"'and idade='"+requisicao.idade+"'"
            this._connection.query(query,callback)
        }

    buscarPorNomeIdadeSexo(requisicao,callback){
        let nome = requisicao.nome
        let idade = requisicao.idade
        let sexo = requisicao.sexo
        let query = "select * from paciente where nome='"+nome+"' and idade='"+idade+"'and sexo='"+sexo+"'"
        this._connection.query(query,callback)
        
    }
    buscarPorIdadeIMCSexo(app,requisicao,callback){
        let query = "select * from paciente where idade ="+requisicao.idade+"and imc="+app.helpers.imc(requisicao.imc)+"and sexo='"+requisicao.sexo+"'"
        this._connection.query(query,callback)
    }
    
    buscarPorNomeIdadeIMCSexo(requisicao,callback){
        let query = "select * form paciente where nome='"+requisicao.nome+"'and idade="+requisicao.idade+"and IMC="+app.helpers.imc(requisicao.imc)+"and sexo='"+requisicao.sexo+"'"
        this._connection.query(query,callback)
    
    }
}

module.exports = (app) => {
    return PacienteDAO
}