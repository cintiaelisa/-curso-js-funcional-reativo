function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Resolveu")
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executanto promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executanto promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executanto promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10, 5000))
    })
}

async function executar() {

    let valor = await retornarValor()

    await esperarPor(2000)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()