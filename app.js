const app = require("./config/express")()
const porta = process.env.PORT || 3000
app.listen(porta,()=>{
    console.log("servidor online")
})