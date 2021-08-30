/* 
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter o endereco do seu usuario pelo Id
*/
// importamos modulo interno do node.js
//util para pegar a fn que trabalha com callback obterEndereco e converter para promise
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
    //quando der algum problema-> reject(ERROR)
    //quando for sucesso => RESOLVE
    return new Promise(function resolvePromise(resolve, reject) {//user retorna um objeto chamado promise e esse obj recebe um callback, fn com 2 param
        //encapsulando dentro da assinatura do obj promisse
        //return reject(new Error('DEU RUIM DE VERDADE!'))// descomentar cai no .catch do obter user, sistema n quebra-se e manipular de uma forma mais simples e printou erro da classe erro
        setTimeout(function () { //simula app rodando em background, exec fn ou expressao apos milissegundos especificados
            //se deu tudo certo, chamo resolve
            return resolve({  //n precisa chamar null manipula error com outra fn mais alto nivel.
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)//continua esperando 1 seg pra resolver, quando terminar de executar vai retornar pra quem chamou a partir de resolve.
        // quando fn terminar o estado da obterUsuario vai mandar pra fulfilled e quem chamar ele vai conseguir executar e resolver as informações
    })
    
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        //assinatura da função
        setTimeout(function () {
            return resolve({
                telefone: '119902',
                ddd: 11
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, { //1 param error "null" segundo o sucesso
            rua: 'dos bobos',
            numero: 0
        })
        
    }, 2000);
}

//1 passo: adicionar a palavra async na função -> automaticamente ela retornará uma Promise
main()//criei assinatura do método preciso chamar ele antes da função, é uma promisse mas se não quero executar nada depois desse main, não preciso capturar .then e .catch dele
async function main(){
    //capturar usuario
    try{
        console.time('medida-promise')//captura tempo de execução de uma função
        const usuario = await obterUsuario() //é uma promise
        //const telefone = await obterTelefone(usuario.id)//agora consigo pegar usuario e passar id
        //const endereco = await obterEnderecoAsync(usuario.id)
        //comentei os dois acima e vou usar Promisse.all pelo tempo, se não preciso manipular telefone e se não depende da resposta do usuario ou se o endereco n depende do telefone posso colocar num promise all executar e falar pra rodar em segundo plano asycronamente e assim obtenho resultado mais performático.
        const resultado = await Promise.all([//mando as assinaturas dos métodos que eu quero executar
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)//endereco n depende do telefone e sim do usuario
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd})${telefone.telefone},
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')//preciso timeEnd pra captura tempo de execução de uma função
    }
    catch(error){//manipular erro, capturando erro, se deu erro...
        console.error('DEU RUIM', error)
    }
}