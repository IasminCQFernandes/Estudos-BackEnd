const express = require('express')
const instrutores = require('./controladores/instrutores')

const rotas = express()

rotas.get('/instrutores', instrutores.listarIinstrutores)

rotas.get('/instrutores/:id', instrutores.obterInstrutor)

rotas.post('/instrutores', instrutores.cadastrarIntrutor)

rotas.put('/instrutor/:id', instrutores.atualizarInstrutor)

rotas.patch('/instrutor/:id/status', instrutores.atualizarStatus)

rotas.delete('/instruror/:id')

module.exports = rotas;