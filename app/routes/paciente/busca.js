module.exports = (app) => {
    app.get("/busca-avancada",(req,res)=>{
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista(result=>{
            res.render("paciente/busca-avancada",{pacientes:result})
        })
        connection.end({timeout:60000})
    })
    
    app.post("/busca-avancada",(req,res)=>{
        let requisicao = req.body
        console.log(requisicao)
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        if(requisicao.nome != "" && requisicao.idade == "" && requisicao.imc=="0" && requisicao.sexo=="0" && requisicao.ordenar==""){
            PacienteDAO.buscarPorNome(requisicao,(err,result)=> {
                    console.log(err)
                    console.log(result)
                })
        }
        if(requisicao.nome == "" && requisicao.idade != "" && requisicao.imc=="0" && requisicao.sexo=="0" && requisicao.ordenar==""){
            PacienteDAO.buscarPorIdade(requisicao,(err,result)=> {
                    console.log(err)
                    console.log(result)
                })
            
        }        
        
        if(requisicao.nome == "" && requisicao.idade == "" && requisicao.imc!="0" && requisicao.sexo=="0" && requisicao.ordenar==""){
            PacienteDAO.buscarPorImc(requisicao,(err,result)=> {
                    console.log(err)
                    console.log(result)
                })

        }
        if(requisicao.nome == "" && requisicao.idade == "" && requisicao.imc=="0" && requisicao.sexo!="0" && requisicao.ordenar==""){
            PacienteDAO.buscarPorSexo(requisicao,(err,result)=> {
                    console.log(err)
                    console.log(result)
                })
        }

        if(requisicao.nome != "" && requisicao.idade != "" && requisicao.imc=="0" && requisicao.sexo=="0" && requisicao.ordenar==""){
            PacienteDAO.buscarPorNomeEIdade(requisicao,(err,result)=>{
                    console.log(err)
                    console.log(result)
            })
        }

        if(requisicao.nome != "" && requisicao.idade == "" && requisicao.imc !="0" && requisicao.sexo=="0" && requisicao.ordenar==""){
            PacienteDAO.buscarPorNomeEImc(requisicao,(err,result)=>{
                    console.log(err)
                    console.log(result)      
            })
        }
        if(requisicao.nome != "" && requisicao.idade == "" && requisicao.imc =="0" && requisicao.sexo!="0" && requisicao.ordenar==""){
            PacienteDAO.buscarPorNomeESexo(requisicao,(err,result)=>{
                    console.log(err)
                    console.log(result)
            })
        }
        if(requisicao.nome=="" && requisicao.idade == "" && requisicao.imc =="0" && requisicao.sexo == "0" && requisicao.ordenar!=0){
            throw new Error ("IMPOSSIVEL ORDENAR O VAZIO!!")
        }
        connection.end({timeout:60000})
    })
}