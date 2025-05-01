const express = require('express')
const app = express()
const Parse = require('parse')

Parse.initialize("mQv79SjdENHmpNINkTCkZ0HzwRaWJZiH8r71omaA", "mv0cZT96cfIPgoeoAIKkXutHg8ccFY26TWjeJZCD");
Parse.serverURL = 'https://parseapi.back4app.com';
app.get('/user' , (req , res )=>{
    res.send("we are connecting with server")
})
app.listen(
    5000, ()=>{
        console.log('server is running')
    }
)