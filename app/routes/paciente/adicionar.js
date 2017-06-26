module.exports = (app) => {
    app.get('/adicionar',(req,res)=>{
        res.render('paciente/adicionar.ejs')
    })

    app.post("/adicionar",(req,res)=>{
        requisicao = req.body
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.adicionar(requisicao,(err,result)=> {
            if(err) console.log(err)
            res.redirect("/pacientes")
        })
        connection.end({timeout:60000})
    })
}