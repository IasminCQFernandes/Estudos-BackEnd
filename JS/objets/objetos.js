function criarObjeto(nomeAt, idadeAt) {
    return {
        nome:nomeAt, 
        idade: idadeAt
    }
}

const pessoa = criarObjeto('iasmin', 21)
console.log(pessoa.nome);

const pessoa1 = {
    nome: 'ana',
    idade: 15,

    texto(){
        console.log(this.idade);
    }
}
pessoa1.texto()