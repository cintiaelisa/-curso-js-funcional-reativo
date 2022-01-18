const { of, Observable } = require('rxjs')

function terminadoCom(parteFinal) {
    return function(source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(valor) {
                    if(Array.isArray(valor)) {
                        subscriber.next(
                            valor.filter(el => el.endsWith(parteFinal)) 
                        )                                        
                    } else if(valor.endsWith(parteFinal)) {
                        subscriber.next(valor)
                    }
                },
                erro(e) {
                    subscriber.erro(e)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }    
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
    .pipe(
        terminadoCom('Silva')
    )
    .subscribe(console.log)