/* classe abstrata dentro do node.js chamada eventEmitter */
const EventEmitter = require('events')

//Criando propria classe que implementa/extende os metodos da classe EventEmitter
class MeuEmissor extends EventEmitter{//capturando todos os metodos da eventEmitter adicionado para o meuEmissor

}
//inicializando a propria classe
const meuEmissor = new MeuEmissor()

//criando manipulador de eventos , para simular user clicando "fazendo alguma coisa"
const nomeEvento = 'usuario:click'

//observador do evento, observar qualquer coisa que ocorreu
meuEmissor.on(nomeEvento, function(click){//quando acontecer o evento com o nomeEvento quero que vc pegue o click e o que mandou junto do click
    console.log('Um usuário clicou', click)//passou o click quando chegar  evento novo console.log passar msg e o dado que ele passou
})

//simular usuario clicando na página
meuEmissor.emit(nomeEvento, 'na barra de rolagem')//emit clicando e vai disparar para nomeEvento 
//clicou no ok
meuEmissor.emit(nomeEvento, 'no ok')

//diferente da promisse vai ser executado enquanto receber eventos
//fn executado em tempo em tempo
let count = 0
setInterval(function () {
    meuEmissor.emit(nomeEvento, 'no ok' + (count ++) ) // a cada 1s vai mandar a msg no ok mais o contador

}, 1000)