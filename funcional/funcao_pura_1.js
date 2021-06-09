// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

const PI = 3.14
//Impura - PI é um valor externo
function areaCirc(raio) {
    return raio * raio * PI
}

//Impura - PI é um valor externo
function areaCirc2(raio) {
    return raio * raio * Math.PI
}

console.log(areaCirc(10))
console.log(areaCirc2(10))

//Pura - Não depende mais de valores externos
function areaCirc3(raio, pi) {
    return raio * raio * pi
}

console.log(areaCirc3(10, PI))