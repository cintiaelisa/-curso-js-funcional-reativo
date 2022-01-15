const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

function composicao(...fns) {
    return function(valor) {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc)) {
                return fn(await acc)
            } else {
            return fn(acc)
            }
        }, valor)
    }
}

const palavrasMaisUsadas = composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosEm('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosApenasNumeros,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosApenasNumeros,
    fn.agruparElementos,
    fn.ordenarPorAtribNumerico('qtde', 'desc')
)

palavrasMaisUsadas(caminho).then(console.log)