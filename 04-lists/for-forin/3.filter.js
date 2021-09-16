//sintaxe de atribuição via desestruturação (destructuring assignment)
const { obterPessoas } = require('./service')//Destructuring quero importar somente algumas coisas da minha função, quero que retorne somente o obterPessoas de dentro do service , do objeto json que vc me trouxe quero que vc faça a extração somente do obter pessoas
/* 
const item = {
    nome: 'Erick',
    idade: 12,
}

const {nome} = item
//do item que foi criado quero que vc extraia somente o nome
console.log('nome', nome)
posso trazer a idade também
const {nome, idade} = item
 */

//try catch sempre na ultima camada que chama todas as outras
async function main() {
    try {
        const {
            results
        } = await obterPessoas(`a`) //de dentro do obterPessoas quero que traga somente o results

        const familiaLars = results.filter(function (item) { // quero pegar todo mundo que fora da familia lars
            //por padrao precisa retornar um booleano
            //para informar se deve manter ou remover da lista
            //false> remove da lista
            //true > mantem
            //filtrando vai retornar novo array com obj filtrados
            //nao encontrou = -1
            //encontrou = posicaoNoArray
            //associação !== -1 vai retornar true ou false
            /* se eu tirar o ! e passar === -1 ele vai trazer todo mundo que n for da familia lars  */
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1 // tolowerCase certeza todo mundo mesmo nome letra minuscula. indexOf para poder verificar se esse objeto contem la no meu texto, quero que verifique se contem a string lars dentro do name desse cara, se tiver ele vai retornar o zero ou se tiver familia lars dentro do nosso objeto ele vai retornar um obj diferente de -1 se for encontrado vai retornar -1
            return result
        })
        //da familia lars traga também names
        const names = familiaLars.map((pessoa) => pessoa.name)//mapper reduzido, pessoa fn com um unico param sei disso pelo (=>) e ele vai retornar pessoa.name
        console.log(names)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}
main()