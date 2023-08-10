const express = require('express')

const rotas = express()

app.get('/', (req,res) =>{
    res.send('tudo ok!')
})

module.exports = rotas;