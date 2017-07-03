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
    buscar(app,requisicao,callback){
        if (requisicao.nome != ""){
            var nome = "nome = '" + requisicao.nome + "'"
        }
        else{
            var nome = ""
        }
        if(requisicao.idade!= ""){
            if(nome=""){
                var idade = "and idade='"+requisicao.idade + "'"
            }
            else{
                var idade = "idade='"+requisicao.idade+"'"        
            }
        }
        else{
            var idade = ""
        }
        if(requisicao.imc != "0"){
            if(nome != "" || idade != ""){
                var imc = "and "+app.helpers.imc(requisicao.imc)
            }  
            else{
                var imc = app.helpers.imc(requisicao.imc)
            }
        }
        else{
            var imc = ""
        }
        if(requisicao.sexo != "0"){
            if(nome != "" || idade != "" || imc != ""){
                var sexo = "and sexo='"+requisicao.sexo+"'"
            }
            else{
                var sexo = "sexo='"+requisicao.sexo+"'"
            }
        }
        else{
            var sexo = ""
        }
        if (requisicao.ordenar !=""){
            if(nome != "" || idade != "" || imc != "0" || sexo !="0"){
                var ordenar = "ORDER BY " + requisicao.ordenar
            }
        }
        else{
            var ordenar = ""
        }
        if(requisicao.ordem == 'ASC'){
            if(requisicao.ordenar !=""){
                var ordem = 'ASC'
            }
        }
        else{
            var ordem = ""
        }
        if(requisicao.ordem == 'DESC'){
            if(requisicao.ordenar !=""){
                var ordem = 'DESC'
            }
        }
        else{
            var ordem = ""
        }
        let query = "select * from paciente where "+nome+" " + idade +" "+ imc+ " " + sexo+ " " + ordenar + " " + ordem
        console.log(query)
        this._connection.query(query,callback)
     }
}

module.exports = (app) => {
    return PacienteDAO
}