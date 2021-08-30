//Promisse funções muito aninhadas sem async await
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

const usuarioPromise = obterUsuario()
//para manipular com sucesso usamos a função .then
//para manipular erros, usamos o .cath
// usuario retornei fn do user, chamei passei ela pra frente chamei a fn telefone e ele passa ela pra frente usuario->telefone-> telefone conceito de pipe
usuarioPromise
.then(function (usuario) {// resultado é o usuario, quando deu certo ele deleta resultado do contexto posso criar com o mesmo nome
    //resolvendo telefone, retornar fn direto que somente obterTelefone retornou, mas se eu quero que a proxima fn tenha resultado da anterior primeiro preciso resolverTelefone pegar o resultado dela e entao modificar o resultado, prox then vai ter resultado do ultimo que foi manipulado
    return obterTelefone(usuario.id)// O que veio do usuarioPromisse nomeou como resultado que veio da fn obterUsuario(), vai capturar usuario e devolver telefone tb
    //resolvi telefone criar um novo obj para que o resultado pegue user tb
    .then(function resolverTelefone(result) {
        //passando usuario para frente, resolvendo obj
        return {
            usuario: {
                nome: usuario.nome,
                id: usuario.id
            },
            //passando telefone pra frente
            telefone: result
        }
    })
})
//resultado vai vir resultado anterior, vai pegar do ultimo .then que teve antes desse (usuario) e ai sim vou chamar endereço       
.then(function (resultado) { //chave inteira retornando antes (return)
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    //resolver endereco para passar outras informacoes do usuario tb
    return endereco.then(function resolverEndereco(result){//result var que representar resultado de endereco
        return{
            usuario: resultado.usuario,
            telefone: resultado.telefone,
            endereco: result
        }
    });
})
.then(function (resultado) {//deu tudo certo passar callback que recebe somente o resultado
    console.log(`
        Nome: ${resultado.usuario.nome}
        Endereco: ${resultado.endereco.rua}, Nº:${resultado.endereco.numero},
        Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
        `)
    })
    //quando dou return caso aconteca algum problema na função, vai retornar erro pra quem chamou e cai no .catch
    .catch(function (error) {// manipular resultado,  deu erro
        console.error('DEU RUIM', error)
    })
    /*
    se passar valor diferente para prim valor do callback promisify n vai funcionar ja que algumas libs n seguem o padrao de erro e resposta de callback, 
    nao colocar o callback como ultimo param da fn ou passa valor pro primeiro param do callback. Ai precisa converter com new promise
     function obterEndereco(idUsuario, callback) {
        setTimeout(function () {
            return callback(12312321, { //1 param error "null" segundo o sucesso
                rua: 'dos bobos',
                numero: 0
            })
    
        }, 2000);
    } */