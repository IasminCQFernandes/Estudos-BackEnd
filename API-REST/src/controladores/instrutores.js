const {intrutores, instrutores} = require('../dados')
let {identificadorInstrutor} = require('../dados')

const listarIinstrutores = (req, res) =>{
    return res.status(200).json(instrutores);
}

const obterInstrutor = (req, res) =>{
    const {id} = req.params;

    const instrutor = instrutores.find((instrutor)=>{
        return instrutor.id === Number(id);
    })

    if(!instrutor){
        return res.status(404).json({mensagem: 'instrutor não encontrado'})
    }

    return res.status(200).json(instrutor)
}

const cadastrarIntrutor = (req, res) =>{
    console.log(req.body);
    // pega as informações do corpo e ao enviar vem para console.log

    const{nome, email, status} = req.body

    if (!nome) {
        return res.status(400).json({mensagem: 'o nome é obrigatorio'})
    }

    if (!email) {
        return res.status(400).json({mensagem: 'o email é obrigatorio'})
    }

    const instrutor = {
        id:identificadorInstrutor++,
        nome: nome,
        email: email,
        status: status ?? true
    }

    instrutores.push(instrutor)

    return res.status(201).json(instrutor)

}

const atualizarInstrutor = (req, res)=>{
    const {id} = req.params;
    
}

module.exports={
    listarIinstrutores,
    obterInstrutor,
    cadastrarIntrutor,
    atualizarInstrutor
}