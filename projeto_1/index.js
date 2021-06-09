const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, 'dados', 'legendas')

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosEm('.srt'))
    .then(fn.lerArquivos)
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerElementosApenasNumeros)
    .then(console.log)
