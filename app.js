const app = require("./config/express")()
const porta = 3000
app.listen(porta,()=>{
    console.log("servidor online")
})