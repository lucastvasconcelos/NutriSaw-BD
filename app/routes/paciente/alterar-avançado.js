module.exports = (app) => {
       app.get("/alterar-selecionado",(req,res)=>{
        let query = req.query
        console.log(query)
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.consultar(query,(err,result)=> {
            res.render("paciente/alterar-selecionado.ejs",{paciente:result})
        })
        connection.end({timeout:60000})
    })

    app.put("/alterar-selecionado",(req,res)=> {
        let requisicao = req.body
        console.log(requisicao)
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.atualizar(requisicao,(err,result) => {
            res.redirect("/pacientes")
        })
        connection.end({timeout:60000})
    })
}