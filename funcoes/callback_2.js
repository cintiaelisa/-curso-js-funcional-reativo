const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

console.log(__dirname)
console.log(caminho)

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

fs.readFile(caminho, {}, exibirConteudo)

console.log('Início...')
//Suprimindo parâmetro - Continua funcional!
fs.readFile(caminho, {}, exibirConteudo)

//Com Arrow Function
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

//Com readFileSync
 console.log('Início Sync...')
 const conteudo = fs.readFileSync(caminho)
 console.log(conteudo.toString())
 console.log('Fim Sync...')