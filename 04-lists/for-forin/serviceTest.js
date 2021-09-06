/* 
*consumir informações do star wars no site https://swapi.dev/
*consegue trazer informações sobre os personagens sobre as naves
*objetivo usar essas bases de dados para manipular listas dentro do javascript
*/
//importar o módulo axios
const axios = require('axios')

//nossa URL do swapi do star wars, objetivo consumir api de pessoas
const URL = `https://swapi.dev/api/people`

//criando função async porque quero manipular promises internamente nessa função
async function obterPessoas(nome){
/* URL completa, não precisa concatenar as variaveis a gnt consegue fazer a chamada de binding a partir de template crase dolar e as chaves para falar que to usando uma variavel 
 /search igual ao nome que o user passar e que seja json */
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)//axios promise para conseguir pegar a informação na mesma linha passo o await
    return response.data //se retornou tudo certo retorna pra mim um objeto.data
}

//teste se deu certo
obterPessoas('r2')
.then(function (resultado){ //quando function chegar um resultado, o que fazer? printar para mim
    console.log('resultado', resultado) //printar na tela para mim
})
//Mas se der algum problema
.catch(function (error){//.catch passar function e capturar o error
    console.error('DEU RUIM', error)//E falar que deu ruim
}) 
