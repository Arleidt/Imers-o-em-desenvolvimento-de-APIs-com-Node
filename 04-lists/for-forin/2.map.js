const service = require('./service');

async function main() {
    try {
        const result = await service.obterPessoas(`a`)
        const name = result.results.map(pessoa => pessoa.name)

        console.log(`names`, name)
    } catch (error) {
        console.log(`error`, error)
    }
}
main()