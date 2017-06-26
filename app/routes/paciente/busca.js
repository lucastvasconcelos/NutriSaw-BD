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
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.buscar(requisicao,(err,result)=> {
            console.log(result)
            })
        connection.end({timeout:60000})
    })
}