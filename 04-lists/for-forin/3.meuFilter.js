//sintaxe de atribuição via desestruturação (destructuring assignment)
const { obterPessoas } = require('./service')//Destructuring quero importar somente algumas coisas da minha função, quero que retorne somente o obterPessoas de dentro do service , do objeto json que vc me trouxe quero que vc faça a extração somente do obter pessoas
/*
objetivo do filter é o resultado do callback tem que ser true ou false 
 */
Array.prototype.meuFilter = function (callback) {//no objeto array do js eu quero add um nova implementacao, prototype extensao pra manipular as coisas do nosso array
    const lista = [] // const lista é igual a lista vazia
    for (index in this) { //this para manipular e entrar em cada um da lista, this lista completa  se usar forof n precisava passar ele
        const item = this[index]// item vai ser o this na posicao indice
        const result = callback(item, index, this) // obteve resultado, executa callback, passa item poderia passar indice e passar a lista completa com this, doc filter seg param indice e terceiro lista completa
        // 0, "", se for objeto null, undefined vai ser == false
        if (!result) continue; // se o result n existir eu quero que vc continue o fluxo entao n é pra fazer nada mas se acontecer alguma coisa filtrar ele
        lista.push(item)// add item para essa lista quem eu quero manter dessa lista no meu objeto 
    }
    return lista; // retorno da lista completa
}

//função para manipular informações
async function main() {
    try {
        const {
            results
        } = await obterPessoas(`a`) //de dentro do obterPessoas quero que traga somente o results

        /* //por padrao precisa retornar um booleano
        //para informar se deve manter ou remover da lista
        //false> remove da lista
        //true > mantem
        //filtrando vai retornar novo array com obj filtrados
        //nao encontrou = -1
        //encontrou = posicaoNoArray
        //associação !== -1 vai retornar true ou false
        //se eu tirar o ! e passar === -1 ele vai trazer todo mundo que n for da familia lars 
        alem do item quero pegar indice e lista */
        const familiaLars = results.meuFilter((item, index, lista) => { //algo da forma reduzida se eu quero executar tudo na mesma linha n preciso passar chaves, mas se eu quero ter implementacao com mais de uma linha ai passo chaves ai posso dar return dentro dele
            console.log(`index: ${index}`, lista.length); // index posicao atual do array, lenght tamanho da lista
            /* return indice tamanho da lista e em seguida vai filtrar o item depois que ele filtra 
            vai retornar nova lista para dentro dessa familia 
             *name mapes em seguida  da lista da familia vai obter somente o nome da pessoa e printar na tela
             */
            return item.name.toLowerCase().indexOf('lars') !== -1  // quero pegar todo mundo que fora da familia lars, se for da familia lars indexOF tem que retornar o que for diferente de -1 
        })
        //da familia lars traga também names
        const names = familiaLars.map((pessoa) => pessoa.name)//mapper reduzido, pessoa fn com um unico param sei disso pelo (=>) e ele vai retornar pessoa.name
        console.log(names)

    } catch (error) {
        console.error('DEU RUIM', error)
    }
}
main()