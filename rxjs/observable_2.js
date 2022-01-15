const { Observable } = require('rxjs')

const obs = Observable.create(subscribe => {
    subscribe.next('RxJS')
    subscribe.next('é')
    subscribe.next('bem')
    subscribe.next('poderoso')
    subscribe.next('!')

    if(Math.random() > 0.5) {
        subscribe.complete()
    } else {
        subscribe.error('Que problema!?1?')
    }
})

// obs.subscribe(
//     valor => console.log(`Valor: ${valor}`),
//     erro => console.log(`Erro: ${erro}`),
//     () => console.log('Fim!')
// )

obs.subscribe({
    next(valor) {
        console.log(`Valor: ${valor}`)
    },
    error(msg) {
        console.log(`Erro: ${msg}`)
    },
    complete() {
        console.log('Fim!')
    }
})