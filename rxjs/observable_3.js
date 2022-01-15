// Desafio
// Criar uma stream de numeros
// entre min e max com Observable!

const { Observable, noop } = require('rxjs')

// function entre(min, max) {
//     return new Observable(subscribe => {
//         for(let i = min; i <= max; i++) {
//             subscribe.next(i)
//         }

//     })
// }

function entre(min, max) {
    return new Observable(subscribe => {
        Array(max - min).fill().map((_, i) => {
            subscribe.next(min + i)   
        })
    subscribe.complete()
    })
}

entre(4, 10).subscribe(
    num => console.log(`num = ${num}`),
    noop,
    () => console.log('Fim!')
)