//arrow function
const felizNatal = () => console.log('Feliz Natal!!!')

felizNatal();

const saudacao = (nome) => "Fala " + nome + "!!!"
console.log(saudacao('Maria'))

const saudacao2 = (nome) => `Fala ${nome}!!!`
console.log(saudacao2('Maria'))

const somar = numeros => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))

const somar2 = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar2(1,2,3))
console.log(somar2(1,2,3,4,5,6,7))
console.log(somar2(1,2,3,4,5,6,7,8,9,10))

//Transformando em arrow functions
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }    
}

const potencia1 = (base) => {
    return function(exp) {
        return Math.pow(base, exp)
    }    
}

console.log(potencia1(2)(8))

const potencia2 = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }    
}

console.log(potencia2(2)(8))

const potencia3 = (base) => {
    return (exp) => Math.pow(base, exp)  
}

console.log(potencia3(2)(8))

const potencia4 = (base) => (exp) => Math.pow(base, exp) 

console.log(potencia4(2)(8))

const potencia5 = base => exp => Math.pow(base, exp)

console.log(potencia5(2)(8))