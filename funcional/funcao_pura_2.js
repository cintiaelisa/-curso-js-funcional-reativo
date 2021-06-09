//Função pura ou impura? - IMPURA - Depende de fator externo
//Não depende somente dos valores de entrada
function gerarNumeroAleatorio(min, max) {
    const fator = max - min +1
    return parseInt(Math.random() * fator) + min 
}

console.log(gerarNumeroAleatorio(5,6))
console.log(gerarNumeroAleatorio(5,6))
console.log(gerarNumeroAleatorio(5,6))
console.log(gerarNumeroAleatorio(5,6))
console.log(gerarNumeroAleatorio(5,6))
console.log(gerarNumeroAleatorio(5,6))