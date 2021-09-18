const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    /* 
    verifica se o cliente passou valor inicial ou não, se valorInicial for diferente de undefined ai eu pego valorInicial : se n passou nada vou pegar o this na posição 0
    ideia passando uma lista se passou um array vazio tem que pegar valor que passou como segundo parametro, se passou seg param vai pegar ele como val inicial
    se não passou nada vai tentar pegar posicao 0, mas se não passou nada um array vazio ai vai quebrar 
    */
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index <= this.length - 1; index++) {
        valorFinal = callback(valorFinal, this[index], this) //substituindo valor final com o valor do incrementador entao valor anterior 20 soma com 30 [20.2, 30.3, 40.5], valorFinal valor anterior que eu tinha + o meu Item nessa posicao  e por padrao o reduce passa a lista completa caso eu precise utilizar 
    }
    return valorFinal // retornando valor final para o usuario
}

async function main() {
    try {
        const {
            results
        } = await obterPessoas(`a`) //pegando resultado de todo mundo que tenha ou começa palavra a no meio do texto
        const pesos = results.map(item => parseInt(item.height))//heigth pode vir string de acordo com web service parseInt para garantir que será um valor para quando somar ele n concatenar string trazer resultado como esperado
        console.log('pesos', pesos)
        //[20.2, 30.3, 40.5] = 0 reduzir a um valor só somando todos os valores desse array
        //anterior 20.2 e prox 30.3
        const minhaLista = [ //objetivo concatenar os arrays e retornar uma lista só, reduzir a um Array só
            ['Erick', 'Wendel'],
            ['NodeBR', 'Nerdzão']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => { //quero reduzir anterior e proximo 
            return anterior.concat(proximo) // concat metodo que a gnt usa para concatenar listas, vai pegar lista anterior e concatenar com a proxima lista e ai vai transformar em um unico array

        }, []) // se a lista estiver vazia, ela por padrao é uma lista, tem os metodos de uma lista padrao para ser utilizada, converte total Erick, Wendel, NodeBR, Nerdzão todo mundo em unico array baseado no tipo dele [], entao o tipo que a gente passa no anterior vai definir o que a gente consegue utilizar, nesse caso usando metodos de lista do js pra criar o reduce, entao o reduce o obj completo é reduzir a um valor final
            .join(', ') // metodo join para transformar toda essa lista em uma unica string, vai pegar todos os itens e separar por virgula
        console.log('total', total)
    } catch (error) {
        console.log('DEU RUIM', error)
    }
}
main()