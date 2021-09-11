/* testar for forin e forof */
//importando modulo service
const service = require('./service')//modulos que eu criei uso o ./ e modulos internos é sem o ./. Um arquivo json consegue com o ./package e obter suas info

async function main() { //fn main que vai manipular promises então uso o async
    try {  // try catch para manipular erro de uma forma que n de problema
        const result = await service.obterPessoas('a')// pegando resultado, mandando qualquer nome mandando a para ver se ele retorna a lista
        const names = []  //add lista em um variavel const name igual array
        console.time('for')
        //trazendo todos os nomes e printar na tela
        for (let i = 0; i <= result.results.length -1; i++) {  //results pq é obj que foi retornado pelo api star wars e .length para verificar a quantidade desse array, -1 se ele trouxer a quant menor que 0 entra no catch e add um incrementador
            //pegando pessoas na posição i
            const pessoa = result.results[i]
            names.push(pessoa.name)  // add todos os nomes nessa lista de nomes, push no nome da pessoa.name
        }
        console.timeEnd('for')

        //forin
        console.time('forin')
        for(let i in result.results) {
            const pessoa = result.results[i]
            names.push(pessoa.name)
        }
        console.timeEnd('forin')

        //forof results
        console.time('forof')
        for(pessoa of result.results){
            names.push(pessoa.name)
        }
        console.timeEnd('forof')

        console.log(`names`, names)
    }
    catch (error) {  //manipulando error caso de algum problema
        console.error(`error interno`, error)
    }
}
main() //chamada do main