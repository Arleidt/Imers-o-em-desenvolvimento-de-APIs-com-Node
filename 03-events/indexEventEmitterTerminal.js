/* classe abstrata dentro do node.js chamada eventEmitter */
const EventEmitter = require('events')

//Criando propria classe que implementa/extende os metodos da classe EventEmitter
class MeuEmissor extends EventEmitter {//capturando todos os metodos da eventEmitter adicionado para o meuEmissor

}
//inicializando a propria classe
const meuEmissor = new MeuEmissor()

//criando manipulador de eventos , para simular user clicando "fazendo alguma coisa"
const nomeEvento = 'usuario:click'

//observador do evento, observar qualquer coisa que ocorreu
meuEmissor.on(nomeEvento, function (click) {//quando acontecer o evento com o nomeEvento quero que vc pegue o click e o que mandou junto do click
    console.log('Um usuário clicou', click)//passou o click quando chegar  evento novo console.log passar msg e o dado que ele passou
})

//trabalhando operações no próprio evento no terminal, como se fosse app console

//objeto process
const stdin = process.openStdin() //process var interna do node vai abrir openStdin

/* objetivo do evento é ficar esperando qualquer alteração em um ambiente especifico
 como data e tomar a decisão do que fazer a partir dele */

//qualquer texto que digitar na pasta
stdin.addListener('data', function (value) { //ouvindo o evento data, data doc do proprio node, pegar o valor e todo vez que user digitar algo no terminal vai printar para mim.
    console.log(`Você digitou: ${value.toString().trim()}`)//toString transformar o que vier em string e tirar os espaços com .trim
}) 

/* //erro comum, ideia da promise executar uma unica vez e eventos para ações continuas. DESCOMENTAR
const stdin = process.openStdin()

function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (value) { //ouvindo o evento data, data doc do proprio node, pegar o valor e todo vez que user digitar algo no terminal vai printar para mim.
            //console.log(`Você digitou: ${value.toString().trim()}`)//toString transformar o que vier em string e tirar os espaços com .trim
            return resolve(value)
        })
    })
}
main().then(function (resultado) {
    console.log('resultado: ', resultado.toString())
}) */