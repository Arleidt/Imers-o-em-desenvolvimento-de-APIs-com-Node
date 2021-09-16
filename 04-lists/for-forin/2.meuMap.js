//map usado para criar um array novo baseado no que o user pediu 
const service = require('./service')

//criando meu proprio array
//substituindo função global do javascript, e ele vai receber uma fn que vai ter um callback
Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [] //vai guardar informações do array quando terminar a execução
    for (let indice = 0; indice <= this.length - 1; indice++) { // length tamanho da lista, -1 pra pegar a quant de todas as listas
        const resultado = callback(this[indice], indice)// passando meu item para o callback, e o map pode receber como segundo parametro o indice. Quando executar o callback mandando como parametro as funções add o resultado pra dentro da lista no push
        novoArrayMapeado.push(resultado)//O que vai adicionar para essa lista
    }
    return novoArrayMapeado;
}

//função para manipular informações
async function main() {
    try {
        const results = await service.obterPessoas(`a`)//passar a para ter certeza que retorna uma listagem

        //fn pessoa pega no this[indice] => item da lista naquela posição pessoa e o indice no segundo parametro que o callback manda
        const names = results.results.meuMap(function(pessoa, indice){// consigo usar meuMap porque o results é uma lista e substitui o metodo global de listas (Array.prototype.meuMap), add minha propria implementação de map
            //return pessoa.name
            return `[${indice}] ${pessoa.name}`//imprime índice e o nome
        })
            
        console.log(`names`, names)
    } catch (error) {
        console.error(`DEU RUIM`, error)
    }
}
main()