const {getCityFromZipcode, getStateFromZipcode} = require('utils-playground')

// console.log('ola');
// getCityFromZipcode('33350005').then(cidade => {
//     console.log(cidade)
// })

// console.log('fim');
let cep = '33350000'

//HÁ 3 FORMAS DE SER FEITO

//A PRIMEIRA É TUDO JUNTO
// const cidade = getCityFromZipcode(cep).then((cidade) =>{
//     console.log(cidade);

// }).catch((erro)=>{
//     console.log(erro);
// })

// const estado = getStateFromZipcode(uf).then((estado) =>{
//     console.log(estado);

// }).catch((erro)=>{
//     console.log(erro);
// })

//A SEGUNDA É DECLARAÇÕES SEPARADAS
const cidade = getCityFromZipcode(cep)

cidade.then((cidade)=>{
    console.log(cidade);
})

cidade.catch((erro)=>{
    console.log(erro.message);
})


const uf = '33350000'
const estado = getStateFromZipcode(uf)

estado.then((estado)=>{
    console.log(estado);
})

cidade.catch((erro)=>{
    console.log(erro.message);
})


//getCityFromZipcode('33350000').then((cidade) =>{
//     console.log(cidade);

//      getStateFromZipcode('33350000').then((estado)=>{
//          console.log(estado)
//      })
// }).catch((erro)=>{
//     console.log(erro);
// })

