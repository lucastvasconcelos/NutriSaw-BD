module.exports = (app) => {
    app.get("/alterar",(req,res) => {
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((err,result)=>{
            res.render("paciente/alterar.ejs",{pacientes:result})
        })
        connection.end({timeout:60000})
   })

   app.post("/alterar",(req,res)=> {
       let requisicao = req.body
       res.render("alterar-selecionado.ejs",{paciente:requisicao})
   })

}