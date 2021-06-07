function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

// Tratamento de erros dentro de promises
funcionarOuNao('Testando', 0.)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp,: ${err}`))
    .catch(err => console.log(`Erro: ${err}`))

//Exemplo com try/catch

function funcionarOuNao2(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            resolve(e)
        }
    })
}