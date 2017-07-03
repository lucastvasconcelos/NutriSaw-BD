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
    buscarPorImc(requisicao,callback){
        let imc = requisicao.imc
        if(imc == '1'){
            let imc = "select * from paciente where imc < 18.5"
            this._connection.query(imc,callback)
        }
        if(imc == '2'){
            let imc = "select * from paciente where imc >= 18.5 and <=25"
            this._connection.query(imc,callback)
        }
        if(imc == '3'){
            let imc = "select * from paciente where imc > 25 and imc <= 30"
            this._connection.query(imc,callback)
        }
        if(imc == '4'){
            let imc = "select * from paciente where imc > 30 and imc <=35"
            this._connection.query(imc,callback)
        }
        if(imc == '5'){
            let imc = "select * from paciente where imc > 35 and imc <= 40"
            this._connection.query(imc,callback)
        }
        if(imc == '6'){
            let imc = "select * from paciente where imc > 40"
            this._connection.query(imc,callback)
        }
        
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
    buscarPorNomeEImc(requisicao,callback){
        let nome = requisicao.nome
        let imc = requisicao.imc
        if(imc == '1'){
            let imcENome = "select * from paciente where imc < 18.5 and nome='"+nome+"'"
            this._connection.query(imcENome,callback)
        }
        if(imc == '2'){
            let imcENome = "select * from paciente where (imc >= 18.5 and imc <=25) and nome='"+nome+"'"
            this._connection.query(imcENome,callback)
        }
        if(imc == '3'){
            let imc = "select * from paciente where (imc > 25 and imc <= 30) and nome='"+nome+"'"
            this._connection.query(imc,callback)
        }
        if(imc == '4'){
            let imc = "select * from paciente where (imc > 30 and imc <=35) and nome='"+nome+"'"
            this._connection.query(imc,callback)
        }
        if(imc == '5'){
            let imc = "select * from paciente where (imc > 35 and imc <= 40)  and nome='"+nome+"'"
            this._connection.query(imc,callback)
        }
        if(imc == '6'){
            let imc = "select * from paciente where imc > 40  and nome='"+nome+"'"
            this._connection.query(imc,callback)
        }
    }
    buscarPorNomeESexo(requisicao,callback){
        let nome = requisicao.nome
        let sexo = requisicao.sexo
        let query = "select * from paciente where nome='"+nome+"'and sexo='"+sexo+"'"
        this._connection.query(query,callback)
    }
    buscarPorIdadeEImc(requisicao,callback){
        let idade = requisicao.idade
        let imc = requisicao.imc
        if(imc == '1'){
            let imcEIdade = "select * from paciente where imc < 18.5 and idade='"+idade+"'"
            this._connection.query(imcENome,callback)
        }
        if(imc == '2'){
            let imcEIdade = "select * from paciente where (imc >= 18.5 and imc <=25) and idade='"+idade+"'"
            this._connection.query(imcEidade,callback)
        }
        if(imc == '3'){
            let imcEIdade = "select * from paciente where (imc > 25 and imc <= 30) and idade='"+idade+"'"
            this._connection.query(imcEIdade,callback)
        }
        if(imc == '4'){
            let imcEIdade = "select * from paciente where (imc > 30 and imc <=35) and idade='"+idade+"'"
            this._connection.query(imcEIdade,callback)
        }
        if(imc == '5'){
            let imcEIdade = "select * from paciente where (imc > 35 and imc <= 40)  and idade='"+idade+"'"
            this._connection.query(imcEIdade,callback)
        }
        if(imc == '6'){
            let imcEIdade = "select * from paciente where imc > 40  and idade='"+idade+"'"
            this._connection.query(imcEIdade,callback)
        }        
    }
    buscarPorIdadeESexo(requisicao,callback){
        let idade = requisicao.idade
        let sexo = requisicao.sexo
        let query = "select * from paciente where idade='"+idade+"'and idade='"+sexo+"'"
        this._connection.query(query,callback)
    }
    buscarPorImcESexo(requisicao,callback){
        let imc = requisicao.imc
        let sexo = requisicao.sexo
        if(imc == '1'){
            let imcEIsexo = "select * from paciente where imc < 18.5 and sexo='"+sexo+"'"
            this._connection.query(imcENome,callback)
        }
        if(imc == '2'){
            let imcEsexo = "select * from paciente where (imc >= 18.5 and imc <=25) and sexo='"+sexo+"'"
            this._connection.query(imcEsexo,callback)
        }
        if(imc == '3'){
            let imcEsexo = "select * from paciente where (imc > 25 and imc <= 30) and sexo='"+sexo+"'"
            this._connection.query(imcEsexo,callback)
        }
        if(imc == '4'){
            let imcEsexo = "select * from paciente where (imc > 30 and imc <=35) and sexo='"+sexo+"'"
            this._connection.query(imcEsexo,callback)
        }
        if(imc == '5'){
            let imcEsexo = "select * from paciente where (imc > 35 and imc <= 40)  and sexo='"+sexo+"'"
            this._connection.query(imcEsexo,callback)
        }
        if(imc == '6'){
            let imcEsexo = "select * from paciente where imc > 40  and sexo='"+sexo+"'"
            this._connection.query(imcEsexo,callback)
        }       
    }
}

module.exports = () => {
    return PacienteDAO
}