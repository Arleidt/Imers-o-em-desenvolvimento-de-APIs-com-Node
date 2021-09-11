const service = require('./service')

//função para manipular informações
async function main() {
    try {
        const results = await service.obterPessoas(`a`)//passar a para ter certeza que retorna uma listagem
        const names = []
        //Vou no results e vou iterar com forEach em cima desse item
        results.results.forEach(function (item) {// no forEch vai receber uma função e essa função vai passar o item, pra cada item da minha listagem ele vai entrar no forEach, dentro de results ele tem um obj results
            names.push(item.name) //cada item da lista eu quero pegar o nome    
        })
        //map
        const name = results.results.map(function (pessoa) {// função que manipula um item para cada item da nossa lista, para cada item do retorno de star wars vai ser uma pessoa
            return pessoa.name// para cada item dessa lista vai retornar um novo array somente com o nome
        })
        //map com arrow function na mesma linha
        const nome = results.results.map(pessoa => pessoa.name)// pessoa vai ser uma função com um parametro, da pessoa que pegou quero que retorne pessoa.name
        
        console.log(`names`, names)
        console.log(`name`, name )
        console.log(`nome`, nome)
    } catch (error) {
        console.error(`DEU RUIM`, error)
    }
}
main()