const express = require('express')
const app = express()

app.get('/user' , (req , res )=>{
    res.send("we are connecting with server")
})
app.listen(
    5000, ()=>{
        console.log('server is running')
    }
)