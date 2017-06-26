module.exports = (app) => {
    app.get('/excluir',(req,res) => {
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((err,result)=>{
            res.render("paciente/excluir.ejs",{pacientes:result})
        })
        connection.end({timeout:60000})
    })

    app.delete("/excluir",(req,res)=>{
        let requisicao = req.body
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.excluir(requisicao,(err,result)=> {
            res.redirect("/pacientes")
        })
        connection.end({timeout:60000})
    })

}