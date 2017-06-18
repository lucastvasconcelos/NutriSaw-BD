module.exports = (app) => {
    listaPacientes = (req,res) => {
        let connection = app.infra.connectionFactory()
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((result) => {
            res.render("paciente/lista.ejs",{lista: result})
        })
        connection.close()
    }

    app.get("/pacientes",listaPacientes)

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
        connection.close()        
    })

    app.get('/excluir',(req,res) => {
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((result)=>{
            res.render("paciente/excluir.ejs",{pacientes:result})
        })
        connection.close()        
    })

    app.delete("/excluir",(req,res)=>{
        let requisicao = req.body
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.excluir(requisicao,(err,result)=> {
            res.redirect("/pacientes")
        })
        connection.close()   
    })

    app.get("/alterar",(req,res) => {
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((result)=>{
            res.render("paciente/alterar.ejs",{pacientes:result})
        })
        connection.close()        
   })

   app.post("/alterar",(req,res)=> {
       let requisicao = req.body
       res.render("alterar-selecionado.ejs",{paciente:requisicao})
   })

   app.get("/alterar-selecionado",(req,res)=>{
        let query = req.query
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.consultar(query,(result)=> {
            res.render("paciente/alterar-selecionado.ejs",{paciente:result})    
        })
        connection.close()
    })

    app.put("/alterar-selecionado",(req,res)=> {
        let requisicao = req.body
        console.log(requisicao)
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.atualizar(requisicao,(err,result) => {
            console.log(err)
            console.log(result)
            res.redirect("/pacientes")
        })
        connection.close()
    })

    app.get("/busca-avancada",(req,res)=>{
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista(result=>{
            res.render("paciente/busca-avancada",{pacientes:result})
        })
        connection.close()    
    })
}