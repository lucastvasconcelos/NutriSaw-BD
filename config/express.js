let express = require('express')
let load = require('express-load')
let bodyparser = require("body-parser")
var methodOverride = require('method-override')

module.exports = () => {
    let app = express()

 
    app.set('view engine','ejs')
    app.set('views','./app/views')
    app.use(bodyparser.urlencoded({extended:true}))
    app.use(bodyparser.json())
    app.use(methodOverride('_method'))
   
    load('routes',{cwd:'app'})
        .then('infra')
        .into(app)

    return app    
}