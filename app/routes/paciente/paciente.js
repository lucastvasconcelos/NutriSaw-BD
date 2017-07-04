module.exports = (app) => {
    listaPacientes = (req,res) => {
        let connection = app.infra.connectionFactory()
        let PacienteDAO = new app.infra.PacienteDAO(connection)
        PacienteDAO.lista((err,result) => {
          console.log(err)
          console.log(result)
            res.render("paciente/lista.ejs",{lista: result})
        })
        connection.end({timeout:60000})
    }

    app.get("/pacientes",listaPacientes)
}
