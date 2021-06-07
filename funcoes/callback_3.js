const nums = [1,2,3,4,5]

//Não é nessário todos os parâmetros do map
const dobro = n => n * 2 
console.log(nums.map(dobro))

//Pegando o índice
const dobro2 = (n,i) => n * 2 + i 
console.log(nums.map(dobro2))

//Pegando o length do array
const dobro3 = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(dobro3))

//Array de string
const nome = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
console.log(nome.map(primeiraLetra))

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const nomeProduto = produto => produto.nome
const valorTotal = produto => produto.qtde * produto.preco

console.log(carrinho.map(nomeProduto))
console.log(carrinho.map(valorTotal))

//Criando o próprio map

Array.prototype.meuMap = function(fn) {

    const mapped = []

    //for(let el of this) fn(el)

    for(let i = 0; i < this.length; i++){
        
        const result = fn(this[i], i, this)
        mapped.push(`==>${result}`)

    } 

    return mapped

}

console.log(carrinho.meuMap(nomeProduto))
console.log(carrinho.meuMap(valorTotal))