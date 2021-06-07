//somar(3)(4)(5)

function somar (a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(somar(3)(4)(5))

//fn -> 3 * 7
// fn -> 3 + 7
//fn - 3 - 7
// calcular(3)(7)(fn)

// const mult = function(a, b) { return a * b }
// const soma = function(a, b) { return a + b }
// const subs = function(a, b) { return a - b }

const mult = (a, b) => a * b 
const soma = (a, b) => a + b 
const subs = (a, b) => a - b

function calcular(a) {
    return function(b) {
        return function (fn) {
            return fn(a, b);
        }
    }
}

console.log(calcular(3)(7)(mult))
console.log(calcular(3)(7)(soma))
console.log(calcular(3)(7)(subs))