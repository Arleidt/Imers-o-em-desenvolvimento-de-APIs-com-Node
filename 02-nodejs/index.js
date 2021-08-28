/* 
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter o endereco do seu usuario pelo Id
*/

/* Quando chama obterUsuario passo função como paramentro 
e ela vai ser chamada passando o resultado pra quem chamou assim que for resolvida
*/

function obterUsuario(callback) {//funcao callback quando terminar de executar apos 1s ela chama a fn callback pra informar que terminou a execução.
    setTimeout(function () { //simula app rodando em background, exec fn ou expressao apos milissegundos especificados
        return callback(null, {  //apos 1 segundo retorna pra quem chamou, 1 param erro segundo sucesso
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)

}

function obterTelefone(idUsuario, callback) { //callback sempre como ultimo parametro
    setTimeout(function () {
        return callback(null, { //1 param error "null" segundo o sucesso
            telefone: '119902',
            ddd: 11
        })

    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
        return callback(null, { //1 param error "null" segundo o sucesso
            rua: 'dos bobos',
            numero: 0
        })

    }, 2000);
}

//sicronizaçao 
//quando usuario terminar de executar essa função, retorna o valor do usuario

function resolverUsuario(erro, usuario) { //padrao callback, primeira parametro de erro e segundo de sucesso
    console.log('usuario', usuario)

}


obterUsuario(function resolverUsuario(error, usuario) {//quando obterUsuario terminar de exec sua fn ele vai chamar resolverUsuario
    //null || "" || 0 === false
    if (error) {
        console.log('DEU RUIM em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        //null || "" || 0 === false
        if (error1) {
            console.log('DEU RUIM em TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.log('DEU RUIM em ENDERECO', error)
                return;
            }

            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero},
            Telefone: (${telefone.ddd})${telefone.telefone}, 
            `)//printar var usa crase, //var que telefone recebeu e o valor que o telefone ta retornando obj com o nome telefone 
        })
    })
})

//obterUsuario(resolverUsuario)//quando obterUsuario terminar de exec sua fn ele vai chamar resolverUsuario
//const usuario = obterUsuario()
//const telefone = obterTelefone(usuario.id)

//console.log('usuario', usuario)
//console.log('telefone', telefone)