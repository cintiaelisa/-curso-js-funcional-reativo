//Mecanismos de Callback

function exec(fn, a , b) {
    return fn(a, b)
}
const somarNoTerminal = (a, b) => console.log(a + b)
const subtrairNoTerminal = (x, y) => console.log(x - y)
const subtrair = (x, y) => x - y

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

const fn = () => console.log('Exec...')
setInterval(fn, 1000)