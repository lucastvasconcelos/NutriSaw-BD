module.exports = (app) => {
    listaPacientes = (req,res) => {
        let connection = app.infra.connectionFactory()
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((err,result) => {
            res.render("paciente/lista.ejs",{lista: result})
        })
        connection.end()
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
        connection.end()        
    })

    app.get('/excluir',(req,res) => {
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((err,result)=>{
            res.render("paciente/excluir.ejs",{pacientes:result})
        })
        connection.end()        
    })

    app.delete("/excluir",(req,res)=>{
        let requisicao = req.body
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.excluir(requisicao,(err,result)=> {
            res.redirect("/pacientes")
        })
        connection.end()   
    })

    app.get("/alterar",(req,res) => {
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((err,result)=>{
            res.render("paciente/alterar.ejs",{pacientes:result})
        })
        connection.end()        
   })

   app.post("/alterar",(req,res)=> {
       let requisicao = req.body
       res.render("alterar-selecionado.ejs",{paciente:requisicao})
   })

   app.get("/alterar-selecionado",(req,res)=>{
        let query = req.query
        console.log(query)
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.consultar(query,(err,result)=> {
            res.render("paciente/alterar-selecionado.ejs",{paciente:result})    
        })
        connection.end()
    })

    app.put("/alterar-selecionado",(req,res)=> {
        let requisicao = req.body
        console.log(requisicao)
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.atualizar(requisicao,(err,result) => {
            res.redirect("/pacientes")
        })
        connection.end()
    })

    app.get("/busca-avancada",(req,res)=>{
        let connection = app.infra.connectionFactory();
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista(result=>{
            res.render("paciente/busca-avancada",{pacientes:result})
        })
        connection.end()    
    })
}