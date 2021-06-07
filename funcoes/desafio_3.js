const fs = require('fs')
const path = require('path')

function readFile(path) {

    return new Promise(resolve => {
        fs.readFile(path, function(_, conteudo) {
            resolve(conteudo.toString())

        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')
readFile(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas[1]))