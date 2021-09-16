/* obj do reduce é reduzir um array em um unico objeto, unico resultado */
const { obterPessoas } = require('./service')

async function main() {
    try {
        const { results } = await obterPessoas(`a`) //pegando resultado de todo mundo que tenha ou começa palavra a no meio do texto
        /* 
        quero trazer todo o peso dessas pessoas
        quero somar e verificar o peso de cada um 
         */
        const pesos = results.map(item => parseInt(item.height))//heigth pode vir string de acordo com web service parseInt para garantir que será um valor para quando somar ele n concatenar string trazer resultado como esperado
        console.log('pesos', pesos)
        //[20.2, 30.3, 40.5] = 0 reduzir a um valor só somando todos os valores desse array
        //anterior 20.2 e prox 30.3
        const total = pesos.reduce((anterior, proximo) => {// fn com 2 param que recebe o anterior
            //20.2 + 30.3
            return anterior + proximo 

        })
        console.log('total', total)
    } catch (error) {
        console.error(`DEU RUIM`, error)
    }
}
main();